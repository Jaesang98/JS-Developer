import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/guide.module.scss';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import SelectBox from '@/components/ui/select';
import CheckBox from '@/components/ui/checkbox';

function GuideWrite01() {
    const testOption = [
        { id: 1, name: '대표메뉴1' },
        { id: 1, name: '대표메뉴2' },
        { id: 1, name: '대표메뉴3' }
    ];
    return (
        <MainLayout>
            <div className={styles['guide-contentWrap']}>
                <div className={styles['meun-content']}>
                    <div className={`${styles['meun-title']} required`}>1. 메뉴작성</div>

                    <div className={styles['menu-block']}>
                        <div className={styles['meun-subTitle']}>대표메뉴</div>
                        <div className={styles['meun-write']}>
                            <div className={styles['meun-selector']}>
                                <SelectBox option={testOption} defalut={'대표메뉴 선택'}></SelectBox>
                                <Input placeholder={'새로운 대표메뉴 이름'} disabled={true}></Input>
                            </div>
                            <div className={styles['meun-check']}>
                                <CheckBox label={'새로 작성'}></CheckBox>
                            </div>
                        </div>
                    </div>

                    <div className={styles['menu-block']}>
                        <div className={styles['meun-subTitle']}>소메뉴</div>
                        <div className={styles['meun-write']}>
                            <div className={styles['meun-selector']}>
                                <SelectBox option={testOption} defalut={'대표메뉴 선택'}></SelectBox>
                                <Input placeholder={'새로운 대표메뉴 이름'} disabled={true}></Input>
                            </div>
                            <div className={styles['meun-check']}>
                                <CheckBox label={'새로 작성'}></CheckBox>
                            </div>
                        </div>
                    </div>

                    <div className={styles['menu-block']}>
                        <div className={styles['meun-subTitle']}>카테고리 메뉴</div>
                        <div className={styles['meun-write']}>
                            <div className={styles['meun-selector']}>
                                <SelectBox option={testOption} defalut={'소메뉴 선택'}></SelectBox>
                                <Input placeholder={'새로운 대표메뉴 이름'} disabled={true}></Input>
                            </div>
                            <div className={styles['meun-check']}>
                                <CheckBox label={'새로 작성'}></CheckBox>
                            </div>
                        </div>
                    </div>

                    <div className={styles['meun-btnBlock']}>
                        <Button variant="btn4" children={'취소'} width={136}></Button>
                        <Button variant="btn5" children={'다음'} width={136}></Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default GuideMenu;
