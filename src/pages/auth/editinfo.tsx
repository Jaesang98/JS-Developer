import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

function EditInfo() {
    return (
        <MainLayout>
            <div className={styles['login-contentWrap']}>
                <div className={styles['login-block']}>
                    <div className={styles['login-title']}>비밀번호 변경</div>

                    <div className={styles['register-input']}>
                        <div className={styles['edit-description']}>아이디</div>
                        <Input placeholder={'아이디'}></Input>
                    </div>

                    <div className={styles['register-input']}>
                        <div className={styles['edit-description']}>새 비밀번호</div>
                        <Input placeholder={'비밀번호'}></Input>
                        <Input placeholder={'비밀번호 확인'} disabled={true}></Input>
                    </div>

                    <div className={styles['login-btn']}>
                        <Button variant="btn5" children={'저장하기'} width={320}></Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default EditInfo;
