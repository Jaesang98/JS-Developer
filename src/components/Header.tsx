import '@/assets/styles/global.scss';

function Header() {
    return (
        <div className="header">
            <div className="header-logo">JS-Developer</div>

            <div className="header-list">
                <div className="header-item">개발 가이드</div>
                <div className="header-item">호버 시</div>
                <div className="header-item disabled">마이페이지</div>
            </div>

            <div className="header-control">
                <div className="header-switch"></div>
                <button className="btn1">로그인</button>
            </div>
        </div>
    );
}

export default Header;
