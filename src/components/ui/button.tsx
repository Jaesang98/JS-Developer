import React from 'react';
import styles from '@/assets/styles/components/ui/button.module.scss';

interface ButtonProps {
    variant?: 'btn1' | 'btn2' | 'btn3' | 'btn4';
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

/**
 * - btn1: 로그인 버튼
 * - btn2: 메인화면 시작하기 버튼
 * - btn3: 메인화면 보러가기 버튼
 * - btn4: 개발자 사전 검색 버튼
 */
const Button: React.FC<ButtonProps> = ({ variant = 'btn1', children, onClick, disabled = false }) => {
    return (
        <button className={`${styles[variant]}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
