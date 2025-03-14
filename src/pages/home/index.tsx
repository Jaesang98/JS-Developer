import MainLayout from '@/components/MainLayout';
import styles from '@/assets/styles/pages/home.module.scss';
import { useNavigate } from 'react-router-dom';

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
                        <button className="btn2">시작하기</button>
                        <button className="btn3">개발 가이드</button>
                        <button
                            className="btn3"
                            onClick={() => {
                                navigate('/Devx');
                            }}>
                            개발 사전
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Home;
