import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="header">
            <div className="header-logo">JS-Developer</div>

            <div className="header-list">
                <div className="header-item">개발 가이드</div>
                <div
                    className="header-item"
                    onClick={() => {
                        navigate('/Devx');
                    }}>
                    개발 사전
                </div>
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
