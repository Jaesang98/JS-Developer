import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/devx.module.scss';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import Switch from '@/components/ui/switch';
import Card from '@/components/ui/card';

function Devx() {
    return (
        <MainLayout>
            <div className={styles['devx-contentWrap']}>
                <div className={styles['devx-content']}>
                    <div className={styles['devx-title']}>개발자 사전</div>
                    <div className={styles['devx-filter']}>
                        <div className={styles['devx-searchWrap']}>
                            <Input variant="input1" children={undefined}></Input>
                            <Button variant="btn4">검색</Button>
                        </div>
                        <div className={styles['devx-filterWrap']}>
                            <Switch></Switch>
                            <Button variant="btn5">단어 추가</Button>
                        </div>
                    </div>
                    <div className={styles['devx-card']}>
                        {Array.from({ length: 8 }, (_, index) => (
                            <Card
                                key={index}
                                title={`Title ${index + 1}`}
                                content={`이것은 ${index + 1}번째 카드의 내용입니다. 위에서 src경로에 이미지 파일이 있을 때는 상대경로로 지정하는 것이 안 되어서 두 가지 예시 방법을 사용했다면, public에 있을 때는 다르다.`}
                                name={`작성자 ${index + 1}`}
                                date={`2024-12-${30 - index}`}
                                children={undefined}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Devx;
