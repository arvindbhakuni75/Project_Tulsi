


import React from 'react';
import './UserDashboard.css';

import { Routes, Route, } from 'react-router-dom';
import UserDash_Home from './UserDash_Elements/UserDash_Home';
import UserDashNavbar from './UserDash_Elements/UserDash_Navbar';
import UserDash_Program from './UserDash_Elements/UserDash_Program';

export default function Dashboard () {
    return (
        <section className='UserDashboard-section'>
            <div className="container">
                                
                <UserDashNavbar />
                <Routes>
                    <Route exect path='/' element = {<UserDash_Home />} />
                    <Route exect path='/program' element = {<UserDash_Program />} />
                        
                        
                </Routes>
                
                
            </div>
        </section>
    );
}