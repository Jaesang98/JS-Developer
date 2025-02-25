import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import Parameter from '@/pages/home/parameter';
import State from '@/pages/home/state';
import Query from '@/pages/home/query';
import Error from '@/pages/error';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/parameter/:data" element={<Parameter />} />
            <Route path="/state" element={<State />} />
            <Route path="/query" element={<Query />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default Router;
