import Header from './Header';
import Footer from './Footer';
import styles from '@/assets/styles/components/layout/layout.module.scss';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles['container']}>
            <Header />
            <div className={styles['contentWrap']}>{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
