import styles from '@/assets/styles/components/ui/modal.module.scss';
import Button from '@/components/ui/button';

interface AlertProps {
  // title: string;
  content: string;
  onClose: () => void;
}

const AlertModal = ({ content, onClose }: AlertProps) => {
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
