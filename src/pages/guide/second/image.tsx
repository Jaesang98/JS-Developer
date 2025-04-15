import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/guide.module.scss';
import Button from '@/components/ui/button';

function AddImage() {
    const testOption = [
        { id: 1, name: '이미지' },
        { id: 1, name: 'GIF' },
        { id: 1, name: 'IFrame' }
    ];
    return (
        <>
            <div className={`${styles['meun-title']} required`}>2. 이미지 첨부</div>
        </>
    );
}

export default AddImage;
