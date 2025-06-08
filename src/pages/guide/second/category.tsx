import { useState } from 'react';
import styles from '@/assets/styles/pages/guide.module.scss';
import Button from '@/components/ui/button';
import SelectBox from '@/components/ui/select';

interface OptionType {
  id: string;
  name: string;
}

function AddCategory() {
  const [testOption] = useState<OptionType[]>([
    { id: '1', name: '이미지' },
    { id: '1', name: 'GIF' },
    { id: '1', name: 'IFrame' },
  ]);
  return (
    <div className={styles['image-contentWrap']}>
      <div className={`${styles['meun-title']} required`}>4. 카테고리 설명</div>
      <div className={styles[`code-selectbox`]}>
        <SelectBox option={testOption} defalut={'프레임워크 선택'}></SelectBox>
      </div>

      <div className={styles['code-content']}>
        <img src="https://picsum.photos/200/300" className={`${styles['image-preview']} ${styles['testimg']}`} alt="" />
      </div>

      <div className={styles['code-bottom']}>
        <div className={styles['code-checkText']}>내용이 저장되었습니다.</div>

        <div className={styles['code-btnBlock']}>
          <Button variant="btn4" children={'내용 지우기'}></Button>
          <Button variant="btn5" children={'저장'} width={124}></Button>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
