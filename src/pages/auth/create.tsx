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
                        <div className="warning">* 이미 사용 중인 아이디입니다.</div>
                        <div className="success">사용 가능한 아이디입니다.</div>
                    </div>

                    <div className={styles['register-input']}>
                        <div className={styles['edit-description']}>새 비밀번호</div>
                        <Input placeholder={'비밀번호'}></Input>
                        <div className="warning">* 영문 대/소문자, 숫자, 특수문자를 모두 포함해야 합니다.</div>
                        <div className="success">안전한 비밀번호입니다.</div>
                        <Input placeholder={'비밀번호 확인'} disabled={true}></Input>
                        <div className="warning">* 비밀번호가 일치하지 않습니다.</div>
                        <div className="success">비밀번호가 일치합니다.</div>
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
