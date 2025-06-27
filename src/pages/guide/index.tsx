import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/guide.module.scss';
import Button from '@/components/ui/button';
// import Input from '@/components/ui/input';
import MDEditor from '@uiw/react-md-editor';

import { MenuItem } from '@/type/guide/menu';
import { GuideItem, Code } from '@/type/guide/list';

import { useGuideMenuAllQuery } from '@/queries/guide/useMenuAllQuery';
import { useGuideListQuery } from '@/queries/guide/useListQuery';

function Guide() {
  // 데이터 흐름
  const navigate = useNavigate();
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // 그 외 변수
  const [menu1Click, setMenu1Click] = useState<number[]>([]); // 왼쪽 메뉴1클릭 (toggle용)
  const [menu2Click, setMenu2Click] = useState<{ parentIndex: number; childIndex: number } | null>(null); // 왼쪽 메뉴2클릭 (toggle용)
  const [menu3Click, setMenu3Click] = useState<number | null>(null); // 오른쪽 메뉴3클릭 (toggle용)
  const [menu2ClickId, setMenu2ClickId] = useState<string>('');
  const [menu2ClickName, setMenu2ClickName] = useState<string>('');
  const [tabClick, setTabClick] = useState<{ menuIndex: number; tabIndex: number }[] | null>([]);

  // 서버통신
  const { data: menuData } = useGuideMenuAllQuery();
  const { data: listData } = useGuideListQuery(menu2ClickId, {
    enabled: !!menu2ClickId,
  });

  const [menuList, setMenuList] = useState<MenuItem[]>();
  const [menuList2, setMenuList2] = useState<MenuItem>();

  // 첫 화면 진입 시 메뉴 전부 펼쳐짐
  useEffect(() => {
    if (menuData?.data) {
      const treeMenu = new Map<string, MenuItem>();

      menuData.data.forEach((item: MenuItem) => {
        treeMenu.set(item.menuId, { ...item, children: [] });
      });

      const tree: MenuItem[] = [];

      menuData.data.forEach((item: MenuItem) => {
        if (item.parentId) {
          const parent = treeMenu.get(item.parentId);
          if (parent) {
            parent.children!.push(treeMenu.get(item.menuId)!);
          }
        } else {
          tree.push(treeMenu.get(item.menuId)!);
        }
      });
      setMenuList(tree);

      // 1Depth 모두 펼치기
      const allMenu1Indexes = menuData.data.map((_: MenuItem, index: number) => index);
      setMenu1Click(allMenu1Indexes);

      // 기본 2Depth 선택: 첫 번째 1Depth의 첫 번째 자식
      const firstMenu1 = tree[0];
      const firstMenu2 = firstMenu1?.children[0];
      if (firstMenu2) {
        setMenu2Click({ parentIndex: 0, childIndex: 0 });
        setMenu2ClickId(firstMenu2.menuId);
        setMenu2ClickName(firstMenu2.menuName);

        // 오른쪽 3Depth 첫 번째 항목도 선택
        const firstMenu3 = firstMenu2.children?.[0];
        if (firstMenu3) {
          setMenu3Click(0);
        }
      }
    }
  }, [menuData?.data]);

  // 2Depth 클릭 할 때 마다 화면 렌더링
  useEffect(() => {
    if (menuList) {
      const foundMenu2 = menuList.flatMap((item) => item.children).find((child) => child.menuId === menu2ClickId);
      setMenuList2(foundMenu2);
      setMenu3Click(0);
    }
  }, [menuList, menu2ClickId]);

  // 스크롤 할 때 마다 3Depth 위치 표현
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
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [listData]);

  // 3Depth클릭 시 스크롤 이동
  const scrollToId = (id: string) => {
    const target = itemRefs.current[id];
    if (target) {
      const offset = 50;
      // 뷰포트 기준 getBoundingClientRect사용
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // 탭 구분하기
  useEffect(() => {
    if (listData?.data) {
      const tabIndex = listData.data.map((_: GuideItem, index: number) => ({
        menuIndex: index,
        tabIndex: 0,
      }));
      setTabClick(tabIndex);
    }
  }, [listData]);

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
                await navigate('/write/menu');
              }}
            ></Button>

            <hr className={styles['divider-28']}></hr>

            {/* <Input variant="input1" width={290} placeholder={'Search'}></Input> */}

            <div className={styles['guide-meun']}>
              {menuList?.map((menuItem1: MenuItem, index1: number) => (
                <div className={styles['guide-meunlist']} key={index1}>
                  <div
                    className={`${styles['guide-meunItem']} ${menu1Click.includes(index1) ? styles['active'] : ''}`}
                    onClick={() => {
                      const indexList = [...menu1Click];
                      // 있으면 인덱스 반환
                      const found = indexList.indexOf(index1);

                      // 인덱스 있으면 삭제
                      if (found > -1) {
                        indexList.splice(found, 1);
                      }
                      // 없으면 넣기
                      else {
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
                            // 부모 자식 인덱스를 확인
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
                {/* <div className={styles['guide-img']}> */}
                <img
                  className={styles['guide-img']}
                  src={item.imageUrl || item.gifUrl || item.iframeUrl}
                  alt="이미지"
                ></img>
                {/* </div> */}

                <div className={styles['guide-tab']}>
                  {/* tab */}
                  <ul className={styles['guide-tablist']}>
                    {item.code.map((item: Code, codeIndex) => (
                      <li
                        key={codeIndex}
                        className={`${styles['guide-tabitem']} ${
                          tabClick?.[index]?.menuIndex === index && tabClick?.[index]?.tabIndex === codeIndex
                            ? styles['active']
                            : ''
                        }`}
                        onClick={() => {
                          const tabIndex = [...(tabClick || [])];
                          tabIndex[index] = { menuIndex: index, tabIndex: codeIndex };
                          setTabClick(tabIndex);
                        }}
                      >
                        {item.frameworkName}
                      </li>
                    ))}
                  </ul>

                  {/* tab contents */}
                  <div className={styles['guide-codeBlock']}>
                    <div className={styles['guide-img']}>
                      <MDEditor.Markdown
                        source={
                          tabClick?.[index] !== undefined
                            ? item?.code[tabClick[index].tabIndex]?.code
                            : item?.code[0]?.code
                        }
                        style={{ whiteSpace: 'pre-wrap', padding: '1.5rem', minHeight: 320 }}
                      />
                    </div>
                  </div>
                </div>

                {/* <div className={styles['guide-descBlock']}>
                  <div className={styles['guide-description']}>
                    {tabClick?.[index] !== undefined
                      ? item?.code[tabClick[index].tabIndex]?.codeDescription
                      : item?.code[0]?.codeDescription}
                    <MDEditor.Markdown
                      source={
                        tabClick?.[index] !== undefined
                          ? item?.code[tabClick[index].tabIndex]?.codeDescription
                          : item?.code[0]?.codeDescription
                      }
                      style={{ whiteSpace: 'pre-wrap', padding: '1.5rem', minHeight: 320 }}
                    />
                  </div>
                </div> */}
                <div className={styles['guide-btnblock']}>
                  <Button
                    variant="btn4"
                    children={'카테고리 삭제'}
                    onClick={async () => {
                      console.log(item);
                    }}
                  ></Button>
                  <Button
                    variant="btn5"
                    children={'카테고리 수정'}
                    onClick={async () => {
                      await navigate('/SecondPage');
                    }}
                  ></Button>
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
