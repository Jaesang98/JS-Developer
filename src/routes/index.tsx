import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import Parameter from '@/pages/demo/parameter';
import State from '@/pages/demo/state';
import Query from '@/pages/demo/query';
import Error from '@/pages/error';

import Header from '@/components/Header';

const Router = () => {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/parameter/:data" element={<Parameter />} />
                <Route path="/state" element={<State />} />
                <Route path="/query" element={<Query />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default Router;
