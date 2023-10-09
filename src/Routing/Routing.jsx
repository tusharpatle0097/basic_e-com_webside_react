import React from 'react';
import SideBar from '../pages/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddtoCard from '../jsx/AddtoCard';
import ProductMainPage from '../jsx/ProductMainPage';
import ContextStore from '../context/ContextStore';
import Details from '../jsx/Details';

const Routing = () => {

    return (
        <>
            <ContextStore>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<ProductMainPage />}></Route>
                        <Route path='/add-cart' element={<AddtoCard />}></Route>
                        <Route path='/product-details/:id' element={<Details />}></Route>
                    </Routes>
                </BrowserRouter>
            </ContextStore>
        </>
    )
}

export default Routing