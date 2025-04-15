import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import CheckBox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';

function Login() {
    return (
        <MainLayout>
            <div className={styles['login-contentWrap']}>
                <div className={styles['login-block']}>
                    <div className={styles['login-title']}>로그인</div>

                    <div className={styles['login-input']}>
                        <Input placeholder={'아이디'}></Input>
                        <Input placeholder={'비밀번호'}></Input>
                    </div>

                    <div className={styles['login-check']}>
                        <CheckBox label={'아이디 저장'}></CheckBox>
                    </div>

                    <div className={styles['login-btn']}>
                        <Button variant="btn5" children={'로그인'} width={320}></Button>
                    </div>

                    <div className={styles['login-help']}>
                        <div className={styles['login-helpItem']}>아이디 찾기</div>
                        <div className={styles['login-helpItem']}>비밀번호 찾기</div>
                        <div className={styles['login-helpItem']}>회원가입</div>
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
