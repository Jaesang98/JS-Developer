import { useState } from 'react';
import styles from '@/assets/styles/components/ui/switch.module.scss';

interface SwitchProps {
    onChange: (value: number) => void;
}

const Switch = ({ onChange }: SwitchProps) => {
    const [active, setActive] = useState(0);

    const toggle = (index: number) => {
        setActive(index);
        if (onChange) {
            onChange(index);
        }
    };

    return (
        <div className={styles.switch1}>
            <div className={styles['switch1-slider']} style={{ transform: `translateX(${active * 100}%)` }}></div>

            <div className={`${styles['switch1-item']} ${active === 0 ? styles['switch1-item-active'] : ''}`} onClick={() => toggle(0)}>
                최신순
            </div>

            <div className={`${styles['switch1-item']} ${active === 1 ? styles['switch1-item-active'] : ''}`} onClick={() => toggle(1)}>
                인기순
            </div>
        </div>
    );
};

export default Switch;
