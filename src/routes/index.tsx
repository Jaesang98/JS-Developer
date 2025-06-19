import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import EditInfo from '@/pages/auth/editinfo';
import Mypage from '@/pages/auth/mypage';
import Create from '@/pages/auth/create';
import Devx from '@/pages/devx';
import DevxDetail from '@/pages/devx/detail';
import DevxEdit from '@/pages/devx/edit';
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
        <Route path="/register/email" element={<Create />} />
        <Route path="/EditInfo" element={<EditInfo />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Devx" element={<Devx />} />
        <Route path="/Devx/:id" element={<DevxDetail />} />
        <Route path="/Edit" element={<DevxEdit />} />
        <Route path="/Edit/:id" element={<DevxEdit />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
