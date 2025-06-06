import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import CheckBox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import BaseModal from '@/components/ui/modal/BaseModal';
import AlertModal from '@/components/ui/modal/AlertModal';

import { useLoginJWTMutation } from '@/queries/auth/useLoginJWTMutation';
import { useUserInfoStore } from '@/stores/useStore';

function Login() {
  // 데이터 흐름
  const navigate = useNavigate();
  const { setUser } = useUserInfoStore();

  //모달창 변수
  const [alerOpen, setAlertOpen] = useState(false);
  const [alerContent, setAlerContent] = useState('');

  // 그 외 변수
  const [userId, setUserId] = useState('');
  const [passWord, setPassWord] = useState('');

  // 서버통신
  const loginJWTMutation = useLoginJWTMutation();

  const validation = async () => {
    if (userId == '' || passWord == '') {
      setAlertOpen(true);
      setAlerContent('아이디 또는 비밀번호를 확인해주세요.');
    } else {
      await loginJWT();
    }
  };

  const loginJWT = async () => {
    loginJWTMutation.mutate(
      {
        userId: userId,
        passWord: passWord || '',
      },
      {
        onSuccess: async (data) => {
          if (data?.userInfo) {
            setUser(data.userInfo);
            await navigate('/');
          }
        },
        onError: async () => {
          setAlertOpen(true);
          setAlerContent('아이디 또는 비밀번호가 틀렸습니다');
        },
      },
    );
  };

  return (
    <MainLayout>
      {alerOpen && (
        <BaseModal onClose={() => setAlertOpen(false)}>
          <AlertModal
            onClose={async () => {
              setAlertOpen(false);
            }}
            content={alerContent}
          />
        </BaseModal>
      )}

      <div className={styles['login-contentWrap']}>
        <div className={styles['login-block']}>
          <div className={styles['login-title']}>로그인</div>

          <div className={styles['login-input']}>
            <Input
              placeholder={'아이디'}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await validation();
                }
              }}
            ></Input>
            <Input
              placeholder={'비밀번호'}
              type={'password'}
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await validation();
                }
              }}
            ></Input>
          </div>

          <div className={styles['login-check']}>
            <CheckBox label={'아이디 저장'}></CheckBox>
          </div>

          <div className={styles['login-btn']}>
            <Button
              variant="btn5"
              children={'로그인'}
              width={320}
              onClick={async () => {
                await validation();
              }}
            ></Button>
          </div>

          <div className={styles['login-help']}>
            <div className={styles['login-helpItem']}>아이디 찾기</div>
            <div className={styles['login-helpItem']}>비밀번호 찾기</div>
            <div
              className={styles['login-helpItem']}
              onClick={async () => {
                await navigate('/Register');
              }}
            >
              회원가입
            </div>
          </div>

          <div className={styles['login-authList']}>
            <div className={styles['login-google']}></div>
            <div className={styles['login-kakao']}></div>
            <div className={styles['login-naver']}></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;
