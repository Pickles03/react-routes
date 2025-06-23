import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />        
            <Route path='/resume' element={<Resume />} />
        </Routes>
    )
}

export default AppRoutes;

