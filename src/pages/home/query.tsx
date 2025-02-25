import { useLocation } from 'react-router-dom';

function Query() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const data = queryParams.get('data');

    return (
        <>
            <div>라우터이동 테스트</div>
            <div>받은데이터 : {data}</div>
        </>
    );
}

export default Query;
