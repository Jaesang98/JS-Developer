import { useParams } from 'react-router-dom';
function Parameter() {
    const params = useParams();
    return (
        <>
            <div>라우터이동 테스트</div>
            <div>받은데이터 : {params.data}</div>
        </>
    );
}

export default Parameter;
