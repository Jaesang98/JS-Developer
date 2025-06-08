import styles from '@/assets/styles/components/ui/checkbox.module.scss';

interface CheckboxProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckboxProps> = ({ label, checked, disabled = false, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    onChange?.(newChecked);
  };

  return (
    <label className={styles.checkboxWrap}>
      {label}
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={styles.customBox}></span>
    </label>
  );
};

export default CheckBox;
