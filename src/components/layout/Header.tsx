import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '@/assets/styles/components/layout/header.module.scss';
import Button from '@/components/ui/button';

import { useUserInfoStore, useDarkModeStore } from '@/stores/useStore';

function Header() {
  // 데이터 흐름
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();
  const { userInfo, logout } = useUserInfoStore();

  // 그 외 변수
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <div className={styles['header']}>
      <div
        className={styles['header-logo']}
        onClick={async () => {
          await navigate('/');
        }}
      >
        JS-Developer
      </div>

      <div className={styles['header-list']}>
        <div className={styles['header-item']} onClick={() => navigate('/guide')}>
          개발 가이드
        </div>
        <div
          className={styles['header-item']}
          onClick={async () => {
            await navigate('/dectionary');
          }}
        >
          개발 사전
        </div>
        <div
          className={styles['header-item']}
          onClick={async () => {
            if (userInfo.email == '') {
              await navigate('/register');
            } else {
              await navigate('/mypage');
            }
          }}
        >
          마이페이지
        </div>
      </div>

      <div className={styles['header-control']}>
        <div className={styles['header-switch']} onClick={toggleDarkMode}></div>
        <Button
          variant={'btn1'}
          children={userInfo.email == '' ? '로그인' : '로그아웃'}
          onClick={async () => {
            if (userInfo.email) {
              logout();
              await navigate('/');
            } else {
              await navigate('/Login');
            }
          }}
        ></Button>
      </div>
    </div>
  );
}

export default Header;
