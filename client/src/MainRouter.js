import React from 'react';
// import { Route, Routes } from "react-router-dom";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from './component/Home'

const MainRouter = () => {
    return (
        <div>
            <Routes>
            <Route exact path="/" Component={Home}/>
        </Routes>

        </div>
        
    )
}

export default MainRouter