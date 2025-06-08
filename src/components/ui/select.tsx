import { useState } from 'react';
import styles from '@/assets/styles/components/ui/select.module.scss';

interface OptionType {
  id: string;
  name: string;
}

interface SelectProps {
  option: OptionType[];
  defalut: string;
  disabled?: boolean;
  onChange?: (item: OptionType) => void;
}

const SelectBox: React.FC<SelectProps> = ({ option, defalut, disabled = false, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<OptionType>();

  const toggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleSelect = (item: OptionType) => {
    setSelected(item);
    setIsOpen(false);
    onChange?.(item);
  };

  return (
    <div>
      <div className={`${styles.select1} ${disabled ? styles.disabled : ''}`} onClick={toggle}>
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
