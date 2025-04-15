import { useState } from 'react';
import styles from '@/assets/styles/components/ui/select.module.scss';

interface OptionType {
    id: number;
    name: string | number;
}

interface SelectProps {
    option: OptionType[];
    defalut: string;
    disabled?: boolean;
}

const SelectBox: React.FC<SelectProps> = ({ option, defalut, disabled = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<OptionType>();

    const toggle = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    const handleSelect = (item: OptionType) => {
        setSelected(item);
        setIsOpen(false);
    };

    return (
        <div>
            <div className={`${styles.select1}`} onClick={toggle}>
                {selected ? selected.name : defalut}
                <span className={isOpen ? styles.arrowUp : styles.arrowDown}></span>
            </div>
            {isOpen && (
                <ul className={styles.optionList}>
                    {option.map((item, index) => (
                        <li key={index} onClick={() => handleSelect(item)} className={styles.optionItem}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectBox;
