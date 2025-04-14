import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/devx.module.scss';
import Button from '@/components/ui/button';

function DevxDetail() {
    return (
        <MainLayout>
            <div className={styles['devx-contentWrap']}>
                <div className={styles['devxdetail-content']}>
                    <div className={styles['devxdetail-titleBlock']}>
                        <div className={styles['devxdetail-title']}>NPM</div>
                        <div className={styles['devxdetail-block']}>
                            <Button variant="btn4" children={'삭제'}></Button>
                            <Button variant="btn5" children={'수정'}></Button>
                        </div>
                    </div>
                    <div className={styles['devxdetail-info']}>
                        <div className={styles['devxdetail-name']}>작성자 : 남재상</div>
                        <div className={styles['devxdetail-date']}>작성일 : 2024-12-20</div>
                    </div>
                    <div className={styles['devxdetail-code']}></div>
                </div>
            </div>
        </MainLayout>
    );
}

export default DevxDetail;
