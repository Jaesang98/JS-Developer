import styles from '@/assets/styles/components/ui/input.module.scss';

interface InputProps {
  variant?: 'input1' | 'input2' | 'input3';
  defaultValue?: string;
  width?: number;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * - input1: 개발자 사전 인풋
 */
const Input: React.FC<InputProps> = ({
  variant = 'input1',
  defaultValue,
  width = '320px',
  placeholder = '',
  disabled = false,
  type,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      className={`${styles[variant]}`}
      style={{ width: width ? `${width}px` : undefined }}
      defaultValue={defaultValue ? defaultValue : ''}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type={type || 'text'}
    ></input>
  );
};

export default Input;
