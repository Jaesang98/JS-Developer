import styles from '@/assets/styles/components/ui/modal.module.scss';
import Button from '@/components/ui/button';

interface ConfirmProps {
  // title: string;
  content: string;
  onClose: () => void;
  onOpen: () => void;
  cancelLabel: string;
  confirmLabel: string;
}

const ConfirmModal = ({ cancelLabel, confirmLabel, content, onClose, onOpen }: ConfirmProps) => {
  return (
    <>
      <div className={styles['modal-title']}>{content}</div>
      <div className={styles['modal-button']}>
        <Button variant="btn4" children={cancelLabel} onClick={onClose}></Button>
        <Button variant="btn5" children={confirmLabel} onClick={onOpen}></Button>
      </div>
    </>
  );
};

export default ConfirmModal;
