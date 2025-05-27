import styles from '@/assets/styles/components/ui/radio.module.scss';

interface OptionType {
  id: number;
  name: string | number;
}

interface RadioProps {
  option: OptionType[];
  disabled?: boolean;
}

const Radio: React.FC<RadioProps> = ({ option }) => {
  return (
    <>
      {option.map((item) => (
        <label className={styles.radioWrap}>
          <input type="radio" name="option" className={styles.radio} />
          <span className={styles.radioIcon}></span>
          {item.name}
        </label>
      ))}
    </>
  );
};

export default Radio;
