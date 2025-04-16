import { createPortal } from 'react-dom';
import styles from '@/assets/styles/components/ui/modal.module.scss';
import { useEffect, useState } from 'react';

interface BaseModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

const BaseModal = ({ children, onClose }: BaseModalProps) => {
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const el = document.getElementById('modal-root');
        setModalRoot(el);
    }, []);

    if (!modalRoot) return null;

    return createPortal(
        <div className={styles['modal-overlay']} onClick={onClose}>
            <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default BaseModal;
