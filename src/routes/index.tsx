import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import Devx from '@/pages/devx';
import Error from '@/pages/error';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Devx" element={<Devx />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default Router;
