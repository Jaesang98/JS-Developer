import styles from '@/assets/styles/pages/guide.module.scss';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Radio from '@/components/ui/radio';

function AddImage() {
    const testOption = [
        { id: 1, name: '이미지' },
        { id: 1, name: 'GIF' },
        { id: 1, name: 'IFrame' }
    ];
    return (
        <div className={styles['image-contentWrap']}>
            <div className={`${styles['meun-title']} required`}>2. 이미지 첨부</div>

            <div className={styles['image-content']}>
                <div className={styles['radio-list']}>
                    <Radio option={testOption}></Radio>
                </div>
                <Button variant="btn7" children={'첨부하기'} width={88}></Button>
                <div className={styles['image-block']}>
                    <div className={styles['image-count']}>(3/10)</div>
                    <div className={styles['image-list']}>
                        <div className={styles['image-wrap']}>
                            <img src="https://picsum.photos/200/300" className={styles['image-preview']} />
                            <div className={styles['image-delete']}></div>
                        </div>

                        <div className={styles['image-wrap']}>
                            <img src="https://picsum.photos/200/300" className={styles['image-preview']} />
                            <div className={styles['image-delete']}></div>
                        </div>

                        <div className={styles['image-wrap']}>
                            <img src="https://picsum.photos/200/300" className={styles['image-preview']} />
                            <div className={styles['image-delete']}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['image-content']}>
                <Button variant="btn7" children={'GIF 첨부하기'} width={112}></Button>
                <img src="https://picsum.photos/200/300" className={`${styles['image-preview']} ${styles['gifimg']}`} />
            </div>

            <div className={styles['image-content']}>
                <div className={styles['image-search']}>
                    <Input placeholder={'링크를 입력해 주세요.'} width={320}></Input>
                    <Button variant="btn5" children={'확인'}></Button>
                </div>
                <img src="https://picsum.photos/200/300" className={`${styles['image-preview']} ${styles['linkimg']}`} />
            </div>
        </div>
    );
}

export default AddImage;
