import { useEffect, useState } from 'react';
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
  const { emailCheck, savedEmail, saveEmail, userInfo, setUser } = useUserInfoStore();

  //모달창 변수
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');

  // 그 외 변수
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [saveEmailCheck, setSaveEmailCheck] = useState(false);

  // 서버통신
  const loginJWTMutation = useLoginJWTMutation();

  const validation = async () => {
    if (email == '' || passWord == '') {
      setAlertOpen(true);
      setAlertContent('이메일 또는 비밀번호를 확인해주세요.');
    } else {
      await loginJWT();
    }
  };

  const loginJWT = async () => {
    loginJWTMutation.mutate(
      {
        email: email,
        passWord: passWord || '',
      },
      {
        onSuccess: async (data) => {
          if (data?.success) {
            saveEmail(saveEmailCheck, email);
            setUser(data.data.userInfo);
            await navigate('/');
          } else {
            saveEmail(saveEmailCheck, email);
            setAlertOpen(true);
            setAlertContent('이메일 또는 비밀번호가 틀렸습니다');
          }
        },
        onError: async () => {
          setAlertOpen(true);
          setAlertContent('로그인에 실패하였습니다.');
        },
      },
    );
  };

  // 이메일 저장 체크
  useEffect(() => {
    if (emailCheck) {
      console.log(savedEmail);
      setEmail(savedEmail);
      setSaveEmailCheck(emailCheck);
    }
  }, []);

  return (
    <MainLayout>
      {alertOpen && (
        <BaseModal onClose={() => setAlertOpen(false)}>
          <AlertModal
            onClose={async () => {
              setAlertOpen(false);
            }}
            content={alertContent}
          />
        </BaseModal>
      )}

      <div className={styles['login-contentWrap']}>
        <div className={styles['login-block']}>
          <div className={styles['login-title']}>로그인</div>

          <div className={styles['login-input']}>
            <Input
              placeholder={'이메일'}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await validation();
                }
              }}
              defaultValue={email}
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
            <CheckBox label={'이메일 저장'} onChange={setSaveEmailCheck} checked={saveEmailCheck}></CheckBox>
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
                await navigate('/register');
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
