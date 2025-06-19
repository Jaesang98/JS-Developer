import { useNavigate } from 'react-router-dom';

import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';

function Register() {
  // 데이터 흐름
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className={styles['login-contentWrap']}>
        <div className={styles['login-block']}>
          <div className={styles['login-title']}>회원가입</div>
          <div className={styles['register-description']}>소셜 로그인 및 이메일로 가입할 수 있습니다.</div>

          <div className={styles['login-authList']}>
            <div className={styles['login-google']}></div>
            <div className={styles['login-kakao']}></div>
            <div className={styles['login-naver']}></div>
          </div>

          <div className="textdivider">또는</div>

          <div className={styles['login-btn']}>
            <Button
              variant="btn4"
              children={'ID/PW 회원가입'}
              width={320}
              onClick={async () => {
                await navigate('/register/email');
              }}
            ></Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;
