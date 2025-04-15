import styles from '@/assets/styles/components/ui/checkbox.module.scss';

interface CheckboxProps {
    label: string;
}

const CheckBox: React.FC<CheckboxProps> = ({ label }) => {
    return (
        <label className={styles.checkboxWrap}>
            {label}
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.customBox}></span>
        </label>
    );
};

export default CheckBox;
