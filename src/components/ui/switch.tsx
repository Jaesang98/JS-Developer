import React from 'react';
import styles from '@/assets/styles/components/ui/switch.module.scss';

interface SwitchProps {
    children: React.ReactNode;
    onChange?: () => void;
    disabled?: boolean;
}

/**
 * - Default: 개발자 사전 스위치
 */
const Switch = () => {
    return (
        <div className={styles['switch1-wrap']}>
            <div className={styles['switch1-item']}>최신순</div>
            <div className={styles['switch1-item2']}>가나다순</div>
        </div>
    );
};

export default Switch;
