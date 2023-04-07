import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './component/Home'
import User from './user/User';
const MainRouter = () => {
    return (
        <div>
            <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/users" Component={User}/>

        </Routes>

        </div>
        
    )
}

export default MainRouter