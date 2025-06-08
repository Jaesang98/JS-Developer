import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/guide.module.scss';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import SelectBox from '@/components/ui/select';
import CheckBox from '@/components/ui/checkbox';

import { MenuItem } from '@/type/guide/menu';

import { useGuideMenuDetailQuery } from '@/queries/guide/useMenuDetailQuery';

interface OptionType {
  id: string;
  name: string;
}

function FirstPage() {
  // 데이터 흐름
  const navigate = useNavigate();

  // 그 외 데이터
  const [selectId, setSelectId] = useState<string>('');
  const [selectType, setSelectType] = useState<string>('');

  const [firstOption, setFirstOption] = useState<OptionType[]>([]);
  const [secondOption, setSecondOption] = useState<OptionType[]>([]);
  const [thirdOption, setThirdOption] = useState<OptionType[]>([]);

  const [checkFirst, setCheckFirst] = useState<boolean>(false);
  const [checkSecond, setCheckSecond] = useState<boolean>(false);
  const [checkThird, setCheckThird] = useState<boolean>(false);

  // 서버 통신 데이터
  const { refetch } = useGuideMenuDetailQuery(selectId);
  const [menuValues, setMenuValues] = useState({
    first: { id: '', name: '', isCustom: false },
    second: { id: '', name: '', isCustom: false },
    third: { id: '', name: '', isCustom: false },
  });

  // 셀렉트 박스 선택 시 값 채우기
  const selectOption = async () => {
    const result = await refetch();
    if (!result.data) return;

    const options = result.data.map((item: MenuItem) => ({
      id: item.menuId,
      name: item.menuName,
    }));

    if (selectType === '') {
      setFirstOption(options);
    } else if (selectType === 'first') {
      setSecondOption(options);
    } else if (selectType === 'second') {
      setThirdOption(options);
    }
  };

  useEffect(() => {
    void selectOption();
  }, [selectId, selectType]);

  return (
    <MainLayout>
      <div className={styles['guide-contentWrap']}>
        <div className={styles['meun-content']}>
          <div className={`${styles['meun-title']} required`}>1. 메뉴작성</div>

          {/* 대표메뉴 */}
          <div className={styles['menu-block']}>
            <div className={styles['meun-subTitle']}>대표메뉴</div>
            <div className={styles['meun-write']}>
              <div className={styles['meun-selector']}>
                <SelectBox
                  option={firstOption}
                  defalut="대표메뉴 선택"
                  disabled={checkFirst || firstOption.length === 0}
                  onChange={(item) => {
                    setThirdOption([]);
                    setSecondOption([]);
                    setSelectId(item.id);
                    setSelectType('first');
                    setMenuValues((prev) => ({
                      ...prev,
                      first: { id: item.id, name: item.name, isCustom: false },
                    }));
                  }}
                />
                <Input
                  placeholder="새로운 대표메뉴 이름"
                  disabled={!checkFirst}
                  onChange={(e) => {
                    const value = e.target.value;
                    setMenuValues((prev) => ({
                      ...prev,
                      first: { id: '', name: value, isCustom: true },
                    }));
                  }}
                />
              </div>
              <div className={styles['meun-check']}>
                <CheckBox
                  checked={checkFirst}
                  label="새로 작성"
                  onChange={(checked) => {
                    setCheckFirst(checked);
                    setCheckSecond(checked);
                    setCheckThird(checked);
                  }}
                />
              </div>
            </div>
          </div>

          {/* 중메뉴 */}
          <div className={styles['menu-block']}>
            <div className={styles['meun-subTitle']}>중메뉴</div>
            <div className={styles['meun-write']}>
              <div className={styles['meun-selector']}>
                <SelectBox
                  option={secondOption}
                  defalut="중메뉴 선택"
                  disabled={checkSecond || secondOption.length === 0}
                  onChange={(item) => {
                    setThirdOption([]);
                    setSelectId(item.id);
                    setSelectType('second');
                    setMenuValues((prev) => ({
                      ...prev,
                      second: { id: item.id, name: item.name, isCustom: false },
                    }));
                  }}
                />
                <Input
                  placeholder="새로운 소메뉴 이름"
                  disabled={!checkSecond}
                  onChange={(e) => {
                    const value = e.target.value;
                    setMenuValues((prev) => ({
                      ...prev,
                      second: { id: '', name: value, isCustom: true },
                    }));
                  }}
                />
              </div>
              <div className={styles['meun-check']}>
                <CheckBox
                  label="새로 작성"
                  checked={checkSecond}
                  disabled={checkFirst} // 첫 번째가 true면 막기
                  onChange={(checked) => {
                    if (!checkFirst) {
                      setCheckSecond(checked);
                      setCheckThird(checked);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* 소메뉴 */}
          <div className={styles['menu-block']}>
            <div className={styles['meun-subTitle']}>소메뉴</div>
            <div className={styles['meun-write']}>
              <div className={styles['meun-selector']}>
                <SelectBox
                  option={thirdOption}
                  defalut="소메뉴 선택"
                  disabled={checkThird || thirdOption.length === 0}
                  onChange={(item) => {
                    setSelectId(item.id);
                    setSelectType('third');
                    setMenuValues((prev) => ({
                      ...prev,
                      third: { id: item.id, name: item.name, isCustom: false },
                    }));
                  }}
                />
                <Input
                  placeholder="새로운 카테고리 이름"
                  disabled={!checkThird}
                  onChange={(e) => {
                    const value = e.target.value;
                    setMenuValues((prev) => ({
                      ...prev,
                      third: { id: '', name: value, isCustom: true },
                    }));
                  }}
                />
              </div>
              <div className={styles['meun-check']}>
                <CheckBox
                  label="새로 작성"
                  checked={checkThird}
                  disabled={checkFirst || checkSecond}
                  onChange={(checked) => {
                    if (!checkFirst && !checkSecond) {
                      setCheckThird(checked);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className={styles['meun-btnBlock']}>
            <Button
              variant="btn4"
              children="취소"
              width={136}
              onClick={async () => {
                await navigate(-1);
              }}
            />
            <Button
              variant="btn5"
              children="다음"
              width={136}
              onClick={async () => {
                console.log('최종 menuValues:', menuValues);
                // await navigate('/SecondPage');
              }}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default FirstPage;
