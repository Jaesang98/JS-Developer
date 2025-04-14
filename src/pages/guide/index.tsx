import MainLayout from '@/components/layout/MainLayout';
import styles from '@/assets/styles/pages/guide.module.scss';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

function Guide() {
    return (
        <MainLayout>
            <div className={styles['guide-contentWrap']}>
                <div className={styles['guide-block']}>
                    {/* 왼쪽 사이드바 */}
                    <div className={styles['guide-leftside']}>
                        <Button variant="btn6" children={'작성하기'}></Button>

                        <hr className={styles['divider-28']}></hr>

                        <Input variant="input1" width={290} placeholder={'Search'}></Input>

                        <div className={styles['guide-meun']}>
                            <div className={styles['guide-meunlist']}>
                                <div className={`${styles['guide-meunItem']} ${styles['active']}`}>API</div>
                                <ul className={styles['guide-submenuList']}>
                                    <li className={`${styles['guide-submenuItem']} ${styles['active']}`}>호버 시 텍스트 색상 Primary로 변경</li>
                                    <li className={styles['guide-submenuItem']}>구글 API 사용</li>
                                </ul>
                            </div>

                            <div className={styles['guide-meunlist']}>
                                <div className={`${styles['guide-meunItem']}`}>API</div>
                            </div>

                            <div className={styles['guide-meunlist']}>
                                <div className={`${styles['guide-meunItem']}`}>API</div>
                            </div>
                        </div>
                    </div>

                    {/* 센터 */}
                    <div className={styles['guide-center']}>
                        <div className={styles['guide-title']}>네이버 API 사용</div>
                        <hr className={styles['divider-56']}></hr>
                        <div className={styles['guide-content']}>
                            <div className={styles['guide-descBlock']}>
                                <div className={styles['guide-subTitle']}>1. 네이버 MAP</div>
                                <div className={styles['guide-description']}>
                                    위에서 src경로에 이미지 파일이 있을 때는 상대경로로 지정하는 것이 안 되어서 두 가지 예시 방법을
                                    사용했다면, public에 있을 때는 다르다. 하지만, <code>&lt;header&gt;</code> 태그는 허용되지 않는 자손 요소와
                                    허용되지 않는 조상 요소가 있습니다. 이러한 규칙들은 <code>&lt;header&gt;</code> 태그가 특정 상황에서 사용될 경우
                                    웹 페이지의 콘텐츠를 파악하는데 어려움이 발생할 수 있기 때문에 생긴 것으로서, <code>&lt;header&gt;</code> 태그를
                                    사용할 때 반드시 고려해야 합니다.
                                </div>
                            </div>
                            <div className={styles['guide-img']}></div>

                            <div className={styles['guide-tab']}>
                                {/* tab */}
                                <ul className={styles['guide-tablist']}>
                                    <li className={`${styles['guide-tabitem']} ${styles['active']}`}>Vue</li>
                                    <li className={styles['guide-tabitem']}>React</li>
                                </ul>

                                {/* tab contents */}
                                <div className={styles['guide-codeBlock']}>
                                    <div className={styles['guide-img']}></div>
                                </div>
                            </div>
                            <div className={styles['guide-btnblock']}>
                                <Button variant="btn4" children={'카테고리 삭제'}></Button>
                                <Button variant="btn5" children={'카테고리 수정'}></Button>
                            </div>
                            <hr className={styles['divider-56']}></hr>
                        </div>
                    </div>

                    {/* 오른쪽 사이드바 */}
                    <div className={styles['guide-rightside']}>
                        <div className={styles['guide-ctg']}>
                            <div className={styles['guide-ctgtitle']}>네이버 MAP</div>
                            <ul className={styles['guide-ctglist']}>
                                <li className={`${styles['guide-ctgitem']} ${styles['active']}`}>네이버 MAP API사용1</li>
                                <li className={styles['guide-ctgitem']}>네이버 MAP API사용2</li>
                                <li className={styles['guide-ctgitem']}>네이버 MAP API사용3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Guide;
