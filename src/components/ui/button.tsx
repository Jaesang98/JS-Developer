import React from 'react';
import styles from '@/assets/styles/components/ui/button.module.scss';

interface ButtonProps {
    variant?: 'btn1' | 'btn2' | 'btn3';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

/**
 * Button component that supports three different styles:
 * - btn1: Small button with primary2 background
 * - btn2: Large primary button with hover effects and dark theme support
 * - btn3: Button with arrow icon and border
 */
const Button: React.FC<ButtonProps> = ({ variant = 'btn1', children, onClick, className = '', disabled = false, type = 'button' }) => {
    return (
        <button type={type} className={`${styles[variant]} ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
