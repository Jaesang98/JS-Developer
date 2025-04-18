import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/devx.module.scss';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import BaseModal from '@/components/ui/modal/BaseModal';
import ConfirmModal from '@/components/ui/modal/ConfirmModal';
import { useState } from 'react';

function DevxEdit() {
    const [open, setOpen] = useState(false);
    return (
        <MainLayout>
            <div className={styles['devx-contentWrap']}>
                {open && (
                    <BaseModal onClose={() => setOpen(false)}>
                        <ConfirmModal
                            onClose={() => {
                                setOpen(false);
                            }}
                            content="중복되는 단어가 존재합니다. 수정 페이지로 이동할까요?"
                        />
                    </BaseModal>
                )}
                <div className={styles['devxdetail-content']}>
                    <div className={styles['devxedit-titleBlock']}>
                        <div className={`${styles['devxedit-title']} required`}>단어</div>
                        <div className={styles['devxedit-search']}>
                            <Input placeholder={'등록할 단어를 입력해 주세요.'}></Input>
                            <Button
                                variant="btn7"
                                width={124}
                                children={'중복 확인'}
                                disabled={false}
                                onClick={() => {
                                    setOpen(true);
                                }}></Button>
                        </div>
                        <div className={styles['devxedit-success']}>등록 가능한 단어입니다.</div>
                    </div>

                    <div className={styles['devxedit-description']}>
                        <div className={`${styles['devxedit-title']} required`}>단어 설명</div>
                        <div className={styles['devxdetail-code']}></div>
                    </div>

                    <div className={styles['devxedit-block']}>
                        <Button variant="btn4" width={136} children={'삭제'}></Button>
                        <Button variant="btn5" width={136} children={'수정'}></Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default DevxEdit;
