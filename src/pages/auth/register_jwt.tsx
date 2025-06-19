import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import BaseModal from '@/components/ui/modal/BaseModal';
import AlertModal from '@/components/ui/modal/AlertModal';

import { useAuthCheckIdQuery } from '@/queries/auth/useAuthCheckIdQuery';
import { useSignUpJWTMutation } from '@/queries/auth/useSignUpJWTMutation';

function Register_JWT() {
  // 데이터 흐름
  const navigate = useNavigate();

  //모달창 변수
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');

  // 그 외 변수
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  const [passWord, setpassWord] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{10,}$/;

  //서버 통신
  const { isError, refetch } = useAuthCheckIdQuery(email);
  const signUpJWTMutation = useSignUpJWTMutation();
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const validation = async () => {
    if (!checkEmail) {
      setAlertOpen(true);
      setAlertContent('아이디 중복 확인을 해주세요.');
    } else if (name == '') {
      setAlertOpen(true);
      setAlertContent('이름을 적어주세요.');
    } else if (phone == '') {
      setAlertOpen(true);
      setAlertContent('핸드폰 번호를 적어주세요.');
    } else if (passWord != confirmPassword) {
      setAlertOpen(true);
      setAlertContent('비밀번호가 서로 일치하지 않습니다.');
    } else if (!regex.test(passWord)) {
      setAlertOpen(true);
      setAlertContent('비밀번호는 영문, 숫자, 특수문자를 포함해 10자 이상이어야 합니다.');
    } else {
      await SignUpJWT();
    }
  };

  const SignUpJWT = async () => {
    signUpJWTMutation.mutate(
      {
        email: email,
        name: name,
        phone: phone,
        password: passWord,
      },
      {
        onSuccess: async (data) => {
          if (data) {
            setAlertOpen(true);
            setAlertContent('회원가입 완료되었습니다. 다시 로그인해주세요');
            setSignUpSuccess(true);
          }
        },
        onError: async () => {
          setAlertOpen(true);
          setAlertContent('회원가입이 실패했습니다.');
        },
      },
    );
  };

  return (
    <MainLayout>
      {alertOpen && (
        <BaseModal onClose={() => setAlertOpen(false)}>
          <AlertModal
            onClose={async () => {
              if (signUpSuccess) {
                await navigate('/');
              } else {
                setAlertOpen(false);
              }
            }}
            content={alertContent}
          />
        </BaseModal>
      )}

      <div className={styles['login-contentWrap']}>
        <div className={styles['login-block']}>
          <div className={styles['login-title']}>회원가입</div>

          <div className={styles['register-input']}>
            <div className={styles['edit-description']}>아이디</div>
            <Input
              placeholder={'아이디'}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await refetch();
                  setCheckEmail(true);
                }
              }}
            ></Input>
            <Button
              variant="btn5"
              children={'중복 확인'}
              width={320}
              onClick={async () => {
                if (email !== '') {
                  const response = await refetch();
                  const result = response.data;

                  if (result?.success) {
                    setCheckEmail(true);
                  } else {
                    setCheckEmail(false);
                    setAlertOpen(true);
                    setAlertContent('이미 사용 중인 아이디입니다.');
                  }
                } else {
                  setAlertOpen(true);
                  setAlertContent('아이디를 작성해주세요.');
                }
              }}
            ></Button>
            {checkEmail &&
              (!isError ? (
                <div className="success">* 사용 가능한 아이디입니다.</div>
              ) : (
                <div className="warning">* 이미 사용 중인 아이디입니다.</div>
              ))}
          </div>

          <div className={styles['register-input']}>
            <div className={styles['edit-description']}>이름</div>
            <Input
              placeholder={'이름'}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await validation();
                }
              }}
            ></Input>
            <div className={styles['edit-description']}>핸드폰 번호</div>
            <Input
              placeholder={'핸드폰 번호'}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await validation();
                }
              }}
            ></Input>
            <div className={styles['edit-description']}>비밀번호</div>
            <Input
              type={'password'}
              placeholder={'비밀번호'}
              onChange={(e) => {
                setpassWord(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await validation();
                }
              }}
            ></Input>
            {passWord != '' &&
              (regex.test(passWord) ? (
                <div className="success">* 안전한 비밀번호입니다.</div>
              ) : (
                <div className="warning">* 영문, 숫자, 특수문자를 모두 포함 10글자이상 작성해야 합니다.</div>
              ))}
            <div className={styles['edit-description']}>비밀번호 확인</div>
            <Input
              type={'password'}
              placeholder={'비밀번호 확인'}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await validation();
                }
              }}
            ></Input>
            {passWord != '' &&
              confirmPassword != '' &&
              (passWord == confirmPassword ? (
                <div className="success">* 비밀번호가 일치합니다.</div>
              ) : (
                <div className="warning">* 비밀번호가 일치하지 않습니다.</div>
              ))}
          </div>

          <div className={styles['login-btn']}>
            <Button variant="btn5" children={'회원 가입'} width={320} disabled={false} onClick={validation}></Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register_JWT;
