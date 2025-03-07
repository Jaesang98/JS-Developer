import Header from './Header';
import Footer from './Footer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container">
            <Header></Header>
            <div className="contentWrap">{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
