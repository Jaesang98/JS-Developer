import MainLayout from '@/components/MainLayout';

function Home() {
    return (
        <MainLayout>
            <div className="home-contentWrap">
                <div className="home-content">
                    <div className="home-title">JS-Developer</div>
                    <div className="home-subtitle">
                        Though it looks quite polished in English, this is still a developer site with much room for improvement.
                    </div>
                    <div className="home-hr"></div>
                    <div className="home-btnWrap">
                        <button className="btn2">시작하기</button>
                        <button className="btn3">개발 가이드</button>
                        <button className="btn3">개발 사전</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Home;
