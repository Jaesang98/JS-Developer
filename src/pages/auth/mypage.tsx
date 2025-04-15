import styles from '@/assets/styles/pages/auth.module.scss';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

function Mypage() {
    return (
        <MainLayout>
            <div className={styles['login-contentWrap']}>
                <div className={styles['mypage-block']}>
                    <div className={styles['login-title']}>마이페이지</div>

                    <div className={styles['mypage-input']}>
                        <div className={styles['edit-description']}>이름</div>
                        <Input defaultValue={'남재상'} disabled={true}></Input>
                    </div>

                    <div className={styles['mypage-input']}>
                        <div className={styles['edit-description']}>이메일</div>
                        <Input defaultValue={'skawotkd12@naver.com'} disabled={true}></Input>
                    </div>

                    <div className={styles['mypage-input']}>
                        <div className={styles['edit-description']}>연결된 계정</div>
                        <Input defaultValue={'카카오'} disabled={true}></Input>
                    </div>
                    <div className={styles['mypage-btn']}>
                        <Button variant="btn5" children={'연결 해제'} width={240}></Button>
                        <div className={styles['mypage-delete']}>회원탈퇴</div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Mypage;
