import styles from '@/assets/styles/components/layout/footer.module.scss';
function Footer() {
    return (
        <div className={styles['footer']}>
            <div className={styles['footer-title']}>JS-Developer</div>
            <div className={styles['footer-info']}>
                <div className={styles['footer-item']}>email : skawotkd12@naver.com</div>
                <div className={styles['footer-item']}>© 2025 Nam Jaesang. All Rights Reserved </div>
            </div>
        </div>
    );
}

export default Footer;
