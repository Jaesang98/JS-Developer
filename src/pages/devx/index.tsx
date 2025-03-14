import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/devx.module.scss';
import Input from '@/components/ui/input';

function Devx() {
    return (
        <MainLayout>
            <div className={styles['devx-contentWrap']}>
                <div className={styles['devx-content']}>
                    <div className={styles['devx-title']}>개발자 사전</div>
                    <div className={styles['devx-filterWrap']}>
                        <Input variant="input1" children={undefined}></Input>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Devx;
