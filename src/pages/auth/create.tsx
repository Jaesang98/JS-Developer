import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

function Create() {
    return (
        <MainLayout>
            <div className={styles['login-contentWrap']}>
                <div className={styles['login-block']}>
                    <div className={styles['login-title']}>회원가입</div>

                    <div className={styles['register-input']}>
                        <div className={styles['edit-description']}>아이디</div>
                        <Input placeholder={'아이디'}></Input>
                        <div className="warning">* 대소문자~~</div>
                        <div className="success">잘 됨</div>
                    </div>

                    <div className={styles['register-input']}>
                        <div className={styles['edit-description']}>새 비밀번호</div>
                        <Input placeholder={'비밀번호'}></Input>
                        <div className="warning">* 대소문자~~</div>
                        <div className="success">잘 됨</div>
                        <Input placeholder={'비밀번호 확인'} disabled={true}></Input>
                        <div className="warning">* 대소문자~~</div>
                        <div className="success">잘 됨</div>
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
