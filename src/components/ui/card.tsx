import React from 'react';
import styles from '@/assets/styles/components/ui/card.module.scss';

interface CardProps {
    title: String;
    content: String;
    name: String;
    date: String;
    children: React.ReactNode;
}

/**
 * - btn1: 로그인 버튼
 * - btn2: 메인화면 시작하기 버튼
 * - btn3: 메인화면 보러가기 버튼
 * - btn4: 개발자 사전 검색 버튼
 * - btn5: 개발자 사전 단어 추가 버튼
 */
const Card: React.FC<CardProps> = ({ title, content, name, date }) => {
    return (
        <div className={styles['cardwrap']}>
            <div className={styles['card-title']}>{title}</div>
            <div className={styles['card-content']}>{content}</div>
            <div className={styles['card-info']}>
                <div className={styles['card-name']}>{name}</div>
                <div className={styles['card-date']}>{date}</div>
            </div>
        </div>
    );
};

export default Card;
