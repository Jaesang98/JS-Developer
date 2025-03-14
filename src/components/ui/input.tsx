import React from 'react';
import styles from '@/assets/styles/components/ui/input.module.scss';

interface InputProps {
    variant?: 'input1' | 'input2' | 'input3';
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

/**
 * - input1: 개발자 사전 인풋
 */
const Input: React.FC<InputProps> = ({ variant = 'input1', children, onClick, disabled = false }) => {
    return (
        <input className={`${styles[variant]}`} onClick={onClick} disabled={disabled}>
            {children}
        </input>
    );
};

export default Input;
