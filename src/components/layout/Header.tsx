import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@/assets/styles/components/layout/header.module.scss';
import Button from '@/components/ui/button';

function Header() {
    const navigate = useNavigate();

    //다크모드 전환
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };

    return (
        <div className={styles['header']}>
            <div className={styles['header-logo']}>JS-Developer</div>

            <div className={styles['header-list']}>
                <div className={styles['header-item']}>개발 가이드</div>
                <div
                    className={styles['header-item']}
                    onClick={() => {
                        navigate('/Devx');
                    }}>
                    개발 사전
                </div>
                <div className={styles['header-item-disabled']}>마이페이지</div>
            </div>

            <div className={styles['header-control']}>
                <div className={styles['header-switch']} onClick={toggleDarkMode}></div>
                <Button variant="btn1">로그인</Button>
            </div>
        </div>
    );
}

export default Header;
