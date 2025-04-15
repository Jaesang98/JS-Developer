import { useState } from 'react';
import styles from '@/assets/styles/components/ui/switch.module.scss';

interface SwitchProps {
    onChange: (value: number) => void;
}

const Switch = ({ onChange }: SwitchProps) => {
    const [active, setActive] = useState(0);

    const toggle = (index: number) => {
        setActive(index);
        onChange(index);
    };

    return (
        <div className={styles.switch1}>
            <div className={`${styles['switch1-slider']} ${styles[`active-${active}`]}`}></div>

            <div className={`${styles['switch1-item']} ${active === 0 ? styles['switch1-item-active'] : 'switch1-item'}`} onClick={() => toggle(0)}>
                최신순
            </div>

            <div className={`${styles['switch1-item']} ${active === 1 ? styles['switch1-item-active'] : 'switch1-item'}`} onClick={() => toggle(1)}>
                가나다순
            </div>
        </div>
    );
};

export default Switch;
