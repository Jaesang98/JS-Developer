import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/devx.module.scss';
import Button from '@/components/ui/button';
import BaseModal from '@/components/ui/modal/BaseModal';
import ConfirmModal from '@/components/ui/modal/ConfirmModal';

import { useDevxDetailQuery } from '@/queries/devx/useDetailQuery';
import { useDevxDeleteMutation } from '@/queries/devx/useDeleteQuery';
import { DevxItem } from '@/type/devx/detail';

function DevxDetail() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const dictId = useParams().id;
  const { data } = useDevxDetailQuery(dictId || '');
  const [dictDetail, setDictDetail] = useState<DevxItem>();

  const deleteMutation = useDevxDeleteMutation();

  useEffect(() => {
    if (data) {
      setDictDetail(data.dictListDetail);
    }
  }, [data]);

  const deleteDict = () => {
    deleteMutation.mutate(
      {
        dictId: dictId || '',
      },
      {
        onSuccess: async () => {
          setOpen(false);
          await navigate(-1);
        },
        onError: async () => {},
      },
    );
  };

  return (
    <MainLayout>
      {open && (
        <BaseModal onClose={() => setOpen(false)}>
          <ConfirmModal
            cancelLabel={'취소'}
            confirmLabel={'삭제'}
            onClose={() => {
              setOpen(false);
            }}
            onOpen={() => {
              deleteDict();
            }}
            content="단어를 삭제하시겠습니까?"
          />
        </BaseModal>
      )}

      {data ? (
        <div className={styles['devx-contentWrap']}>
          <div className={styles['devxdetail-content']}>
            <div className={styles['devxdetail-titleBlock']}>
              <div className={styles['devxdetail-title']}>{dictDetail?.dictTitle}</div>
              <div className={styles['devxdetail-block']}>
                <Button
                  variant="btn4"
                  children={'삭제'}
                  onClick={() => {
                    setOpen(true);
                  }}
                />
                <Button variant="btn5" children={'수정'} />
              </div>
            </div>
            <div className={styles['devxdetail-info']}>
              <div className={styles['devxdetail-name']}>작성자 : {dictDetail?.userName}</div>
              <div className={styles['devxdetail-date']}>작성일 : {dictDetail?.updated}</div>
            </div>
            <div className={styles['devxdetail-code']}>
              <MDEditor.Markdown
                source={dictDetail?.dictDescription}
                style={{ whiteSpace: 'pre-wrap', padding: '1.5rem', minHeight: 320 }}
              />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </MainLayout>
  );
}

export default DevxDetail;
