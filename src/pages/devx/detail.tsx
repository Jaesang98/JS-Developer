import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/devx.module.scss';
import Button from '@/components/ui/button';
import { useDevxDetailQuery } from '@/queries/devx/useDetailQuery';
import { DevxItem } from '@/type/devx/detail';

function DevxDetail() {
  const dictId = useParams().id;
  const { data } = useDevxDetailQuery(dictId || '');
  const [dictDetail, setDictDetail] = useState<DevxItem>();

  useEffect(() => {
    if (data) {
      setDictDetail(data.dictListDetail);
    }
  }, [data]);

  return (
    <MainLayout>
      {data ? (
        <div className={styles['devx-contentWrap']}>
          <div className={styles['devxdetail-content']}>
            <div className={styles['devxdetail-titleBlock']}>
              <div className={styles['devxdetail-title']}>{dictDetail?.dictTitle}</div>
              <div className={styles['devxdetail-block']}>
                <Button variant="btn4" children={'삭제'} />
                <Button variant="btn5" children={'수정'} />
              </div>
            </div>
            <div className={styles['devxdetail-info']}>
              <div className={styles['devxdetail-name']}>작성자 : {dictDetail?.userName}</div>
              <div className={styles['devxdetail-date']}>작성일 : {dictDetail?.updated}</div>
            </div>
            <div className={styles['devxdetail-code']}>{dictDetail?.dictDescription}</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </MainLayout>
  );
}

export default DevxDetail;
