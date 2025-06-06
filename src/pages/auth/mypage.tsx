import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

import { useUserInfoStore } from '@/stores/useStore';

function Mypage() {
  const { userInfo } = useUserInfoStore();
  return (
    <MainLayout>
      <div className={styles['login-contentWrap']}>
        <div className={styles['mypage-block']}>
          <div className={styles['login-title']}>마이페이지</div>

          <div className={styles['mypage-input']}>
            <div className={styles['edit-description']}>아이디</div>
            <Input defaultValue={userInfo.userId} disabled={true}></Input>
          </div>

          <div className={styles['mypage-input']}>
            <div className={styles['edit-description']}>이름</div>
            <Input defaultValue={userInfo.userName} disabled={true}></Input>
          </div>

          <div className={styles['mypage-input']}>
            <div className={styles['edit-description']}>연결된 계정</div>
            <Input defaultValue={userInfo.loginType} disabled={true}></Input>
          </div>
          <div className={`${styles['mypage-btn']} ${styles['divide']}`}>
            <Button variant="btn5" children={'연결 해제'} width={240}></Button>
            <Button variant="btn5" children={'내 정보 변경'} width={240}></Button>
          </div>
          <div className={styles['mypage-btn']}>
            <div className={styles['mypage-delete']}>회원탈퇴</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Mypage;
