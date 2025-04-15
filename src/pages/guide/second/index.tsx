import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/guide.module.scss';
import AddImage from './image';
import AddCode from './code';
import AddCategory from './category';
import Button from '@/components/ui/button';

function SecondPage() {
    return (
        <MainLayout>
            <div className={styles['guide-contentWrap']}>
                <div className={styles['meun-content2']}>
                    <AddImage></AddImage>
                    <hr></hr>
                    <AddCode></AddCode>
                    <hr></hr>
                    <AddCategory></AddCategory>
                    <div className={styles['btn-wrap']}>
                        <Button variant="btn7" children={'생성하기'} disabled={false}></Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default SecondPage;
