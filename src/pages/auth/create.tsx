import { useState } from 'react';

import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

import { useAuthDuplicateQuery } from '@/queries/auth/useDuplicationQuery';

function Create() {
  // 그 외 변수
  const [userId, setUserId] = useState('');
  const [checkUserId, setCheckUserId] = useState(false);
  const [passWord, setpassWord] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{10,}$/;

  //서버 통신
  const { data, isError, refetch } = useAuthDuplicateQuery(userId);

  return (
    <MainLayout>
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
            ></Input>
            <Button
              variant="btn5"
              children={'중복 확인'}
              width={320}
              onClick={async () => {
                await refetch();
                setCheckUserId(true);
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
            ></Input>
            {regex.test(passWord) ? (
              <div className="success">* 안전한 비밀번호입니다.</div>
            ) : (
              <div className="warning">* 영문, 숫자, 특수문자를 모두 포함 10글자이상 작성해야 합니다.</div>
            )}
            <Input
              type={'password'}
              placeholder={'비밀번호 확인'}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></Input>
            {passWord == confirmPassword ? (
              <div className="success">* 비밀번호가 일치합니다.</div>
            ) : (
              <div className="warning">* 비밀번호가 일치하지 않습니다.</div>
            )}
          </div>

          <div className={styles['login-btn']}>
            <Button variant="btn5" children={'회원 가입'} width={320}></Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Create;
