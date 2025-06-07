import { useEffect, useState } from 'react';

import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/guide.module.scss';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

import { MenuItem } from '@/type/guide/menu';

import { useGuideMenuQuery } from '@/queries/guide/useMenuQuery';

function Guide() {
  // 데이터 흐름
  // const navigate = useNavigate();
  // const { setUser } = useUserInfoStore();

  //모달창 변수
  // const [alertOpen, setAlertOpen] = useState(false);
  // const [alertContent, setAlertContent] = useState('');

  // 그 외 변수
  const [menu1Click, setMenu1Click] = useState<number[]>([]); // 왼쪽 메뉴1클릭 (toggle용)
  const [menu2Click, setMenu2Click] = useState<{ parentIndex: number; childIndex: number } | null>(null); // 왼쪽 메뉴2클릭 (toggle용)
  const [menu3Click, setMenu3Click] = useState<number | null>(null); // 오른쪽 메뉴3클릭 (toggle용)
  const [menu2ClickId, setMenu2ClickId] = useState('MENU_1_0001');

  // 서버통신
  const { data } = useGuideMenuQuery();
  const [menuList, setMenuList] = useState<MenuItem[]>();
  const [menuList2, setMenuList2] = useState<MenuItem>();

  useEffect(() => {
    if (data?.data) {
      setMenuList(data.data);
    }
  }, [data?.data]);

  useEffect(() => {
    if (menuList) {
      const foundMenu2 = menuList.flatMap((item) => item.children).find((child) => child.menuId === menu2ClickId);
      setMenuList2(foundMenu2);
      setMenu3Click(0);
    }
  }, [menuList, menu2ClickId]);

  return (
    <MainLayout>
      <div className={styles['guide-contentWrap']}>
        <div className={styles['guide-block']}>
          {/* 왼쪽 사이드바 */}
          <div className={styles['guide-leftside']}>
            <Button variant="btn6" children={'작성하기'}></Button>

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
            <div className={styles['guide-title']}>네이버 API 사용</div>
            <hr className={styles['divider-56']}></hr>
            <div className={styles['guide-content']}>
              <div className={styles['guide-descBlock']}>
                <div className={styles['guide-subTitle']}>1. 네이버 MAP</div>
                <div className={styles['guide-description']}>
                  위에서 src경로에 이미지 파일이 있을 때는 상대경로로 지정하는 것이 안 되어서 두 가지 예시 방법을
                  사용했다면,public에 있을 때는 다르다. 하지만, <code>&lt;header&gt;</code> 태그는 허용되지 않는 자손
                  요소와 허용되지 않는 조상 요소가 있습니다. 이러한 규칙들은 <code>&lt;header&gt;</code> 태그가 특정
                  상황에서 사용될 경우 웹 페이지의 콘텐츠를 파악하는데 어려움이 발생할 수 있기 때문에 생긴 것으로서,{' '}
                  <code>&lt;header&gt;</code> 태그를 사용할 때 반드시 고려해야 합니다.
                </div>
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
