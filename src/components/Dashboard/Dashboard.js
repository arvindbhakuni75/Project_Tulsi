
import './Dashboard.css';
import React from 'react';
import Navbar from './Dash_Element/Das_Navbar';
import { Routes, Route, } from 'react-router-dom';
import DashHome from './Dash_Element/DashHome';
import Submission from './Dash_Element/Submission';
import Buckt from './Dash_Element/Buckt';
import Bounties from './Dash_Element/Bounties';
import Approved from './Dash_Element/Approved';

export default function Dashboard () {
    return (
        <section className='Dashboard-section'>
            <div className="container">
                                
                <Navbar />
                    <Routes>
                        <Route exect path='/' element = {<DashHome />} />
                        <Route path='/bounties' element = {<Bounties />} />
                        <Route path ='/submission' element = {<Submission />} />
                        <Route path ='/approved' element = {<Approved />} />
                        <Route path ='/buckt' element = {<Buckt />} />
                        
                    </Routes>
                
            </div>
        </section>
    );
}