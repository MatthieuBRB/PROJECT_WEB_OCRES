import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './container/home/Home';
import Admin from './container/admin/Admin';

export default() => (
    <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/admin" exact element={<Admin />}/>
    </Routes>
);