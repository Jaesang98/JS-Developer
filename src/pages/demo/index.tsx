import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const navigate = useNavigate();

  const pageOpen = () => {
    void navigate('/parameter/1');
  };

  const pageOpen2 = () => {
    void navigate('/state', { state: '2' });
  };

  const pageOpen3 = () => {
    void navigate('/query?data=3');
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng); // 언어 변경
  };

  return (
    <>
      <div className="test">*React JSX에서는 객체나 배열을 직접 출력할 수 없기 때문에, 문자열로 변환*</div>
      <br></br>
      <button onClick={pageOpen}>라우터 이동테스트1</button>
      <button onClick={pageOpen2}>라우터 이동테스트2</button>
      <button onClick={pageOpen3}>라우터 이동테스트3</button>
      <br />
      <br />
      <button
        onClick={() => {
          changeLanguage('ko');
        }}
      >
        한국어로 바꾸기
      </button>
      <h2>다국어 처리 (선택된 다국어: {i18n.language})</h2>
      <h3>{t('Test')} </h3>
    </>
  );
}

export default Home;
