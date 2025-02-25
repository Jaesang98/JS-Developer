import axios from 'axios';
import { useUserInfoStore } from '@/stores/userInfo';
import { useState } from 'react';

function App() {
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

    return (
        <>
            <button onClick={fetchServer}>서버통신</button>
            <div>zuntand 테스트값: {JSON.stringify(userStore.userInfo)}</div>
            <div>*React JSX에서는 객체나 배열을 직접 출력할 수 없기 때문에, 문자열로 변환*</div>
        </>
    );
}

export default App;
