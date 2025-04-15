import styles from '@/assets/styles/components/ui/button.module.scss';

interface ButtonProps {
    variant?: 'btn1' | 'btn2' | 'btn3' | 'btn4' | 'btn5' | 'btn6' | 'btn7';
    width?: number;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

/**
 * - btn1: 로그인 버튼
 * - btn2: 메인화면 시작하기 버튼
 * - btn3: 메인화면 보러가기 버튼
 * - btn4: 개발자 사전 검색 버튼
 * - btn5: 개발자 사전 단어 추가 버튼
 * - btn6: 개발자 가이드 작성하기 버튼
 */
const Button: React.FC<ButtonProps> = ({ variant = 'btn1', width, children, onClick, disabled = false }) => {
    return (
        <button className={`${styles[variant]}`} style={width ? { width } : undefined} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
