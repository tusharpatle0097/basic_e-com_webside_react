import React from 'react';
import SideBar from '../pages/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Routing = () => {
   
    return (
        <>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<SideBar />}></Route>
                    </Routes>
                </BrowserRouter>
      

        </>
    )
}

export default Routing