import styles from '@/assets/styles/components/ui/modal.module.scss';
import Button from '../button';

interface ConfirmProps {
  // title: string;
  content: string;
  onClose: () => void;
  onOpen: () => void;
}

const ConfirmModal = ({ content, onClose, onOpen }: ConfirmProps) => {
  return (
    <>
      <div className={styles['modal-title']}>{content}</div>
      <div className={styles['modal-button']}>
        <Button variant="btn4" children={'취소'} onClick={onClose}></Button>
        <Button variant="btn5" children={'이동'} onClick={onOpen}></Button>
      </div>
    </>
  );
};

export default ConfirmModal;
