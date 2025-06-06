import { useEffect } from 'react';
import styles from '@/assets/styles/components/ui/modal.module.scss';
import Button from '@/components/ui/button';

interface AlertProps {
  // title: string;
  content: string;
  onClose: () => void;
}

const AlertModal = ({ content, onClose }: AlertProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    setTimeout(() => {
      (document.activeElement as HTMLElement)?.blur();
    }, 10);

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  return (
    <>
      <div className={styles['modal-title']}>{content}</div>
      <div className={styles['modal-button']}>
        <Button variant="btn5" children={'확인'} onClick={onClose}></Button>
      </div>
    </>
  );
};

export default AlertModal;
