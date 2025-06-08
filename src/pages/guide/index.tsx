import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/guide.module.scss';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

import { MenuItem } from '@/type/guide/menu';
import { GuideItem } from '@/type/guide/list';

import { useGuideMenuQuery } from '@/queries/guide/useMenuQuery';
import { useGuideListQuery } from '@/queries/guide/useListQuery';

function Guide() {
  // 데이터 흐름
  const navigate = useNavigate();
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  //모달창 변수
  // const [alertOpen, setAlertOpen] = useState(false);
  // const [alertContent, setAlertContent] = useState('');

  // 그 외 변수
  const [menu1Click, setMenu1Click] = useState<number[]>([]); // 왼쪽 메뉴1클릭 (toggle용)
  const [menu2Click, setMenu2Click] = useState<{ parentIndex: number; childIndex: number } | null>(null); // 왼쪽 메뉴2클릭 (toggle용)
  const [menu3Click, setMenu3Click] = useState<number | null>(null); // 오른쪽 메뉴3클릭 (toggle용)
  const [menu2ClickId, setMenu2ClickId] = useState<string>('');
  const [menu2ClickName, setMenu2ClickName] = useState<string>('');
  // const [menu3ClickId, setMenu3ClickId] = useState<string>('');

  // 서버통신
  const { data: menuData } = useGuideMenuQuery();
  const { data: listData } = useGuideListQuery(menu2ClickId, {
    enabled: !!menu2ClickId,
  });

  const [menuList, setMenuList] = useState<MenuItem[]>();
  const [menuList2, setMenuList2] = useState<MenuItem>();

  useEffect(() => {
    if (menuData?.data) {
      setMenuList(menuData.data);

      // 1Depth 모두 펼치기
      const allMenu1Indexes = menuData.data.map((_, index: number) => index);
      setMenu1Click(allMenu1Indexes);

      // 기본 2Depth 선택: 첫 번째 1Depth의 첫 번째 자식
      const firstMenu2 = menuData.data[0]?.children[0];
      if (firstMenu2) {
        setMenu2Click({ parentIndex: 0, childIndex: 0 });
        setMenu2ClickId(firstMenu2.menuId);
        setMenu2ClickName(firstMenu2.menuName);

        // 오른쪽 3Depth 첫 번째 항목도 선택
        const firstMenu3 = firstMenu2.children?.[0];
        if (firstMenu3) {
          setMenu3Click(0);
          // setMenu3ClickId(firstMenu3.menuId);
        }
      }
    }
  }, [menuData?.data]);

  useEffect(() => {
    if (menuList) {
      const foundMenu2 = menuList.flatMap((item) => item.children).find((child) => child.menuId === menu2ClickId);
      setMenuList2(foundMenu2);
      setMenu3Click(0);
    }
  }, [menuList, menu2ClickId]);

  useEffect(() => {
    const handleScroll = () => {
      if (!listData?.data) return;

      const scrollY = window.scrollY;
      const offset = 100;

      for (let i = 0; i < listData.data.length; i++) {
        const item = listData.data[i];
        const el = itemRefs.current[item.menuId];
        if (!el) continue;

        const top = el.offsetTop - offset;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setMenu3Click(i);
          // setMenu3ClickId(item.menuId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [listData]);

  const scrollToId = (id: string) => {
    const target = itemRefs.current[id];
    if (target) {
      const offset = 50;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <MainLayout>
      <div className={styles['guide-contentWrap']}>
        <div className={styles['guide-block']}>
          {/* 왼쪽 사이드바 */}
          <div className={styles['guide-leftside']}>
            <Button
              variant="btn6"
              children={'작성하기'}
              onClick={async () => {
                await navigate('/FirstPage');
              }}
            ></Button>

            <hr className={styles['divider-28']}></hr>

            <Input variant="input1" width={290} placeholder={'Search'}></Input>

            <div className={styles['guide-meun']}>
              {menuList?.map((menuItem1: MenuItem, index1: number) => (
                <div className={styles['guide-meunlist']} key={index1}>
                  <div
                    className={`${styles['guide-meunItem']} ${menu1Click.includes(index1) ? styles['active'] : ''}`}
                    onClick={() => {
                      const indexList = [...menu1Click];
                      const found = indexList.indexOf(index1);

                      if (found > -1) {
                        indexList.splice(found, 1);
                      } else {
                        indexList.push(index1);
                      }

                      setMenu1Click(indexList);
                    }}
                  >
                    {menuItem1.menuName}
                  </div>
                  {menu1Click.includes(index1) && (
                    <ul className={styles['guide-submenuList']}>
                      {menuItem1?.children.map((menuItem2: MenuItem, index2: number) => (
                        <li
                          key={index2}
                          className={`${styles['guide-submenuItem']} ${
                            menu2Click?.parentIndex === index1 && menu2Click?.childIndex === index2
                              ? styles['active']
                              : ''
                          }`}
                          onClick={() => {
                            setMenu2Click({ parentIndex: index1, childIndex: index2 });
                            setMenu2ClickId(menuItem2.menuId);
                            setMenu2ClickName(menuItem2.menuName);
                          }}
                        >
                          {menuItem2.menuName}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 센터 */}
          <div className={styles['guide-center']}>
            <div className={styles['guide-title']}>{menu2ClickName}</div>
            <hr className={styles['divider-56']}></hr>
            {listData?.data.map((item: GuideItem, index: number) => (
              <div className={styles['guide-content']} key={index} ref={(el) => (itemRefs.current[item.menuId] = el)}>
                <div className={styles['guide-descBlock']}>
                  <div className={styles['guide-subTitle']}>{item.menuName}</div>
                  <div className={styles['guide-description']}>{item.menuDescription}</div>
                </div>
                <div className={styles['guide-img']}></div>

                <div className={styles['guide-tab']}>
                  {/* tab */}
                  <ul className={styles['guide-tablist']}>
                    <li className={`${styles['guide-tabitem']} ${styles['active']}`}>Vue</li>
                    <li className={styles['guide-tabitem']}>React</li>
                  </ul>

                  {/* tab contents */}
                  <div className={styles['guide-codeBlock']}>
                    <div className={styles['guide-img']}></div>
                  </div>
                </div>
                <div className={styles['guide-btnblock']}>
                  <Button variant="btn4" children={'카테고리 삭제'}></Button>
                  <Button variant="btn5" children={'카테고리 수정'}></Button>
                </div>
                <hr className={styles['divider-56']}></hr>
              </div>
            ))}
          </div>

          {/* 오른쪽 사이드바 */}
          <div className={styles['guide-rightside']}>
            {
              <div className={styles['guide-ctg']}>
                <div className={styles['guide-ctgtitle']}>{menuList2?.menuName}</div>
                <ul className={styles['guide-ctglist']}>
                  {menuList2?.children.map((item, index) => (
                    <li
                      className={`${styles['guide-ctgitem']} ${menu3Click === index ? styles['active'] : ''}`}
                      onClick={() => {
                        if (menu3Click === index) {
                          setMenu3Click(null);
                        } else {
                          setMenu3Click(index);
                        }
                        // setMenu3ClickId(item.menuId);
                        scrollToId(item.menuId);
                      }}
                      key={index}
                    >
                      {item.menuName}
                    </li>
                  ))}
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Guide;
