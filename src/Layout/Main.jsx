import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;