import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import BaseModal from '@/components/ui/modal/BaseModal';
import ConfirmModal from '@/components/ui/modal/ConfirmModal';
import AlertModal from '@/components/ui/modal/AlertModal';

import { useWithDrawMutation } from '@/queries/auth/useWithDrawMutation';
import { useUserInfoStore } from '@/stores/useStore';

function Mypage() {
  // 데이터 흐름
  const navigate = useNavigate();
  const { userInfo, logout } = useUserInfoStore();

  //모달창 변수
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);

  // 서버통신
  const withDrawMutation = useWithDrawMutation();

  const withDraw = async () => {
    withDrawMutation.mutate(
      {
        userId: userInfo.email,
      },
      {
        onSuccess: async () => {
          logout();
          setAlertOpen(true);
          setAlertContent('회원탈퇴가 완료되었습니다.');
        },
        onError: async () => {
          setAlertOpen(true);
          setAlertContent('회원탈퇴가 실패하였습니다.');
        },
      },
    );
  };

  return (
    <MainLayout>
      {confirmOpen && (
        <BaseModal onClose={() => setConfirmOpen(false)}>
          <ConfirmModal
            onClose={async () => {
              setConfirmOpen(false);
            }}
            onOpen={async () => {
              await withDraw();
            }}
            content={'정말 회원을 탈퇴하시겠습니까?'}
            cancelLabel={'취소'}
            confirmLabel={'탈퇴'}
          />
        </BaseModal>
      )}

      {alertOpen && (
        <BaseModal onClose={() => setAlertOpen(false)}>
          <AlertModal
            onClose={async () => {
              await navigate('/');
            }}
            content={alertContent}
          />
        </BaseModal>
      )}
      <div className={styles['login-contentWrap']}>
        <div className={styles['mypage-block']}>
          <div className={styles['login-title']}>마이페이지</div>

          <div className={styles['mypage-input']}>
            <div className={styles['edit-description']}>아이디</div>
            <Input defaultValue={userInfo.email} disabled={true}></Input>
          </div>

          <div className={styles['mypage-input']}>
            <div className={styles['edit-description']}>이름</div>
            <Input defaultValue={userInfo.name} disabled={true}></Input>
          </div>

          <div className={styles['mypage-input']}>
            <div className={styles['edit-description']}>연결된 계정</div>
            <Input
              defaultValue={userInfo.loginType == 'LOCAL' ? userInfo.email : userInfo.loginType}
              disabled={true}
            ></Input>
          </div>
          <div className={`${styles['mypage-btn']} ${styles['divide']}`}>
            <Button
              variant="btn5"
              children={'연결 해제'}
              width={240}
              disabled={userInfo.loginType == 'LOCAL' ? true : false}
            ></Button>
            <Button
              variant="btn5"
              children={'비밀번호 변경'}
              width={240}
              onClick={async () => {
                await navigate('/EditInfo');
              }}
            ></Button>
          </div>
          <div className={styles['mypage-btn']}>
            <div
              className={styles['mypage-delete']}
              onClick={() => {
                setConfirmOpen(true);
              }}
            >
              회원탈퇴
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Mypage;
