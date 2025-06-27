import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import EditInfo from '@/pages/auth/editinfo';
import Mypage from '@/pages/auth/mypage';
import Register_JWT from '@/pages/auth/register_jwt';
import Devx from '@/pages/dictionary';
import DevxDetail from '@/pages/dictionary/detail';
import DevxEdit from '@/pages/dictionary/edit';
import Guide from '@/pages/guide';
import FirstPage from '@/pages/guide/fist';
import SecondPage from '@/pages/guide/second';
import Error from '@/pages/error';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/email" element={<Register_JWT />} />
        <Route path="/mypage/edit/password" element={<EditInfo />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/dectionary" element={<Devx />} />
        <Route path="/dectionary/:id" element={<DevxDetail />} />
        <Route path="/dectionary/edit" element={<DevxEdit />} />
        <Route path="/dectionary/edit/:id" element={<DevxEdit />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/write/menu" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
