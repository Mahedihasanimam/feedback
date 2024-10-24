import React from 'react';
import Navbar from '../../components/share/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/share/Footer';


const Mainlayout = () => {
    return (
        <div className='font-nunito'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;