import { useNavigate } from 'react-router-dom';
import styles from '@/assets/styles/pages/home.module.scss';
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
                        <Button variant={'btn2'} children={'시작하기'} onClick={() => navigate('/Guide')}></Button>
                        <Button variant={'btn3'} children={'개발 가이드'} onClick={() => navigate('/Guide')}></Button>
                        <Button variant={'btn3'} children={'개발 사전'} onClick={() => navigate('/Devx')}></Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Home;
