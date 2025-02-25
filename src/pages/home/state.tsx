import { useLocation } from 'react-router-dom';
function State() {
    const location = useLocation();
    //   const params = useParams();
    return (
        <>
            <div>라우터이동 테스트</div>
            <div>받은데이터 : {location.state}</div>
        </>
    );
}

export default State;
