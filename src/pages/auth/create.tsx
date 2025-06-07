import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import BaseModal from '@/components/ui/modal/BaseModal';
import AlertModal from '@/components/ui/modal/AlertModal';

import { useAuthDuplicateQuery } from '@/queries/auth/useDuplicationQuery';
import { useSignUpJWTMutation } from '@/queries/auth/useSignUpJWTMutation';
import { useUserInfoStore } from '@/stores/useStore';

function Create() {
  // 데이터 흐름
  const navigate = useNavigate();
  const { setUser } = useUserInfoStore();

  //모달창 변수
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');

  // 그 외 변수
  const [userId, setUserId] = useState('');
  const [checkUserId, setCheckUserId] = useState(false);
  const [passWord, setpassWord] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{10,}$/;

  //서버 통신
  const { isError, refetch } = useAuthDuplicateQuery(userId);
  const signUpJWTMutation = useSignUpJWTMutation();
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const validation = async () => {
    if (!checkUserId) {
      setAlertOpen(true);
      setAlertContent('아이디 중복 확인을 해주세요.');
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
        userId: userId,
        passWord: passWord || '',
      },
      {
        onSuccess: async (data) => {
          if (data) {
            setAlertOpen(true);
            setAlertContent('회원가입 완료되었습니다.');
            setUser(data);
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
                setUserId(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  await refetch();
                  setCheckUserId(true);
                }
              }}
            ></Input>
            <Button
              variant="btn5"
              children={'중복 확인'}
              width={320}
              onClick={async () => {
                if (userId != '') {
                  await refetch();
                  setCheckUserId(true);
                } else {
                  setAlertOpen(true);
                  setAlertContent('아이디를 작성해주세요.');
                }
              }}
            ></Button>
            {checkUserId &&
              (!isError ? (
                <div className="success">* 사용 가능한 아이디입니다.</div>
              ) : (
                <div className="warning">* 이미 사용 중인 아이디입니다.</div>
              ))}
          </div>

          <div className={styles['register-input']}>
            <div className={styles['edit-description']}>새 비밀번호</div>
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

export default Create;
