import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/devx.module.scss';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import BaseModal from '@/components/ui/modal/BaseModal';
import ConfirmModal from '@/components/ui/modal/ConfirmModal';
import AlertModal from '@/components/ui/modal/AlertModal';

import { useDevxDuplicateQuery } from '@/queries/devx/useDuplicationQuery';
import { useDevxAddMutation } from '@/queries/devx/useAddQuery';

function DevxEdit() {
  // 데이터 흐름
  const navigate = useNavigate();
  const dictId = useParams().id;

  // 모달창 변수
  const [alerOpen, setAlertOpen] = useState(false);
  const [alerContent, setAlerContent] = useState('');
  const [open, setOpen] = useState(false);

  // 그 외 변수
  const [searchInput, setSearchInput] = useState('');
  const [value, setValue] = useState<string | undefined>('');
  const [validate, setValidate] = useState(false);

  // 서버통신
  const { data, refetch } = useDevxDuplicateQuery(searchInput);
  const addMutation = useDevxAddMutation();

  const validation = async () => {
    const result = await refetch();
    if (result.data.result == false) {
      setOpen(true);
      setValidate(false);
    } else {
      setOpen(false);
      setValidate(true);
    }
  };

  const saveDict = () => {
    if (validate) {
      addMutation.mutate(
        {
          dictTitle: searchInput,
          dictDescription: value || '',
        },
        {
          onSuccess: async () => {
            setAlerContent('저장되었습니다.');
            setAlertOpen(true);
          },
          onError: async () => {
            setAlerContent('등록 중 오류가 발생했습니다.');
            setAlertOpen(true);
          },
        },
      );
    } else {
      setAlerContent('중복확인을 해주세요.');
      setAlertOpen(true);
    }
  };

  return (
    <MainLayout>
      <div className={styles['devx-contentWrap']}>
        {/* 기본 alert모달창 */}
        {alerOpen && (
          <BaseModal onClose={() => setAlertOpen(false)}>
            <AlertModal
              onClose={async () => {
                setAlertOpen(false);
                await navigate(`/Devx`);
              }}
              content={alerContent}
            />
          </BaseModal>
        )}

        {/* 기본 confirm모달창 */}
        {open && (
          <BaseModal onClose={() => setOpen(false)}>
            <ConfirmModal
              cancelLabel={'취소'}
              confirmLabel={'이동'}
              onClose={() => {
                setOpen(false);
              }}
              onOpen={async () => {
                await navigate(`/Devx/${data.dictId}`);
              }}
              content="중복되는 단어가 존재합니다. 수정 페이지로 이동할까요?"
            />
          </BaseModal>
        )}

        <div className={styles['devxdetail-content']}>
          <div className={styles['devxedit-titleBlock']}>
            <div className={`${styles['devxedit-title']} required`}>단어</div>
            <div className={styles['devxedit-search']}>
              <Input
                placeholder={'등록할 단어를 입력해 주세요.'}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={async (e) => {
                  if (e.key === 'Enter') {
                    await validation();
                  }
                }}
              ></Input>
              <Button
                variant="btn7"
                width={124}
                children={'중복 확인'}
                disabled={searchInput === '' ? true : false}
                onClick={validation}
              ></Button>
            </div>
            {data?.result == true ? <div className={styles['devxedit-success']}>등록 가능한 단어입니다.</div> : ''}
          </div>

          <div className={styles['devxedit-description']}>
            <div className={`${styles['devxedit-title']} required`}>단어 설명</div>
            <div className={styles['devxdetail-code']}>
              <MDEditor data-color-mode="dark" value={value} onChange={setValue} height={320} />
            </div>
          </div>

          <div className={styles['devxedit-block']}>
            <Button
              variant="btn4"
              width={136}
              children={'취소'}
              onClick={async () => {
                await navigate(-1);
              }}
            ></Button>
            <Button variant="btn5" width={136} children={dictId ? '수정' : '저장'} onClick={saveDict}></Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default DevxEdit;
