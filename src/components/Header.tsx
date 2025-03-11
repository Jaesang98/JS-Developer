import { useState, useEffect } from 'react';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        // body에 dark-theme 클래스 추가 또는 제거
        if (newMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedDarkMode);

        if (savedDarkMode) {
            document.body.classList.add('dark-theme');
        }
    }, []);

    return (
        <div className="header">
            <div className="header-logo">JS-Developer</div>

            <div className="header-list">
                <div className="header-item">개발 가이드</div>
                <div className="header-item">호버 시</div>
                <div className="header-item disabled">마이페이지</div>
            </div>

            <div className="header-control">
                <div className="header-switch" onClick={toggleDarkMode}></div>
                <button className="btn1">로그인</button>
            </div>
        </div>
    );
}

export default Header;
