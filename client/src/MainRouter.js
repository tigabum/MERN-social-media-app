import React from 'react';
import { Route, Routes } from "react-router-dom";
import Signin from './auth/Signin';
import Home from './component/Home'
import Signup from './user/Signup';
import User from './user/User';
const MainRouter = () => {
    return (
        <div>
            <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/users" Component={User}/>
            <Route path="/signup" Component={Signup}/>
            <Route path='/signin' Component={Signin}/>

        </Routes>

        </div>
        
    )
}

export default MainRouter