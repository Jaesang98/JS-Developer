import axios from 'axios';
import { useUserInfoStore } from '@/stores/userInfo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
    const userStore = useUserInfoStore();
    const [data, setdata] = useState<string>('');

    const fetchServer = () => {
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: 'Article title',
                body: 'Article body content',
                userId: 1
            }
        })
            .then(response => {
                setdata(response.data.userId);
                userStore.setUser({
                    userId: response.data.userId,
                    userName: '남재상',
                    adminYn: 'Y'
                });
            })
            .catch(error => {
                console.error(error);
            });
    };

    const navigate = useNavigate();

    const pageOpen = () => {
        navigate('/parameter/1');
    };

    const pageOpen2 = () => {
        navigate('/state', { state: '2' });
    };

    const pageOpen3 = () => {
        navigate('/query?data=3');
    };

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng); // 언어 변경
    };

    return (
        <>
            <button onClick={fetchServer}>서버통신</button>
            <div>zuntand 테스트값: {JSON.stringify(userStore.userInfo)}</div>
            <div>*React JSX에서는 객체나 배열을 직접 출력할 수 없기 때문에, 문자열로 변환*</div>
            <br></br>
            <button onClick={pageOpen}>라우터 이동테스트1</button>
            <button onClick={pageOpen2}>라우터 이동테스트2</button>
            <button onClick={pageOpen3}>라우터 이동테스트3</button>
            <br />
            <br />
            <button
                onClick={() => {
                    changeLanguage('ko');
                }}>
                한국어로 바꾸기
            </button>
            <h2>다국어 처리 (선택된 다국어: {i18n.language})</h2>
            <h3>{t('Test')} </h3>
        </>
    );
}

export default Home;
