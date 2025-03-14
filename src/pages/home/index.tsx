import styles from '@/assets/styles/pages/home.module.scss';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/button';

function Home() {
    const navigate = useNavigate();
    return (
        <MainLayout>
            <div className={styles['home-contentWrap']}>
                <div className={styles['home-content']}>
                    <div className={styles['home-title']}>JS-Developer</div>
                    <div className={styles['home-subtitle']}>
                        Though it looks quite polished in English, this is still a developer site with much room for improvement.
                    </div>
                    <div className={styles['home-hr']}></div>
                    <div className={styles['home-btnWrap']}>
                        <Button variant="btn2">시작하기</Button>
                        <Button variant="btn3">개발 가이드</Button>
                        <Button variant="btn3" onClick={() => navigate('/Devx')}>
                            개발 사전
                        </Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Home;
