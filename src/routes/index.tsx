import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
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
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Devx" element={<Devx />} />
                <Route path="/Devx/:id" element={<DevxDetail />} />
                <Route path="/Edit/:id" element={<DevxEdit />} />
                <Route path="/Guide" element={<Guide />} />
                <Route path="/FirstPage" element={<FirstPage />} />
                <Route path="/SecondPage" element={<SecondPage />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default Router;
