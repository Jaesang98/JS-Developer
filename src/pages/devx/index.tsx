import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/devx.module.scss';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import Switch from '@/components/ui/switch';

function Devx() {
    return (
        <MainLayout>
            <div className={styles['devx-contentWrap']}>
                <div className={styles['devx-content']}>
                    <div className={styles['devx-title']}>개발자 사전</div>
                    <div className={styles['devx-filter']}>
                        <div className={styles['devx-searchWrap']}>
                            <Input variant="input1" children={undefined}></Input>
                            <Button variant="btn4">검색</Button>
                        </div>
                        <div className={styles['devx-filterWrap']}>
                            <Switch></Switch>
                            <Button variant="btn5">단어 추가</Button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Devx;
