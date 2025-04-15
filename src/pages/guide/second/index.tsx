import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/guide.module.scss';
import AddImage from './image';

function SecondPage() {
    const testOption = [
        { id: 1, name: '대표메뉴1' },
        { id: 1, name: '대표메뉴2' },
        { id: 1, name: '대표메뉴3' }
    ];
    return (
        <MainLayout>
            <div className={styles['guide-contentWrap']}>
                <div className={styles['meun-content']}>
                    <AddImage></AddImage>
                </div>
            </div>
        </MainLayout>
    );
}

export default SecondPage;
