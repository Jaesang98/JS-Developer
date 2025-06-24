import { useNavigate } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/devx.module.scss';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import Switch from '@/components/ui/switch';
import Card from '@/components/ui/card';

import { useDevxListQuery } from '@/queries/devx/useListQuery';
import { DevxItem } from '@/type/devx/list';
import { useEffect, useState } from 'react';

function Devx() {
  // 데이터 흐름
  const navigate = useNavigate();

  // 그 외 변수
  const [dictList, setDictList] = useState<DevxItem[]>();
  const [searchInput, setSearchInput] = useState('');

  // 서버통신
  const { data, refetch } = useDevxListQuery(searchInput);

  // dictList 데이터 가공
  useEffect(() => {
    if (data?.data) {
      setDictList(data?.data);
    }
  }, [data]);

  // 최신순, 가나다순 정렬
  const listSort = (value: number) => {
    if (!dictList) return;
    const sortData = [...dictList];

    if (value == 0) {
      sortData.sort((a, b) => a.updated.localeCompare(b.updated));
    } else {
      sortData.sort((a, b) => a.dictTitle.localeCompare(b.dictTitle));
    }
    setDictList(sortData);
  };

  // 검색
  const searchList = async () => {
    await refetch();
  };

  return (
    <MainLayout>
      <div className={styles['devx-contentWrap']}>
        <div className={styles['devx-content']}>
          <div className={styles['devx-title']}>개발자 사전</div>
          <div className={styles['devx-filter']}>
            <div className={styles['devx-searchWrap']}>
              <Input
                variant="input1"
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={async (e) => {
                  if (e.key === 'Enter') {
                    await searchList();
                  }
                }}
              />
              <Button variant="btn4" onClick={searchList}>
                검색
              </Button>
            </div>
            <div className={styles['devx-filterWrap']}>
              <Switch onChange={(value) => listSort(value)} />
              <Button
                variant="btn5"
                onClick={async () => {
                  await navigate('/Edit');
                }}
              >
                단어 추가
              </Button>
            </div>
          </div>
          <div className={styles['devx-card']}>
            {dictList?.map((item, idx) => (
              <div
                key={idx}
                onClick={async () => {
                  await navigate(`/Devx/${item.id}`);
                }}
              >
                <Card
                  title={item.dictTitle}
                  content={item.dictDescription}
                  name={item.username}
                  date={item.updated.slice(0, 10)}
                  children={undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Devx;
