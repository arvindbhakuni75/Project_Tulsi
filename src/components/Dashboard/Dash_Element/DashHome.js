

import React from 'react';

import file from '../../images/D-Icon1.png';
import calender from '../../images/D-Icon2.png';
import profilePicture from '../../images/icons-bounty.png';
import msj from '../../images/D-Icon3.png';
import link from '../../images/D-Icon4.png';
import MainBar from './Charts/MainBar';
import CircleChart from './Charts/CircleChart';

export default function DHome () {
    return (
        <div className="item-wraper row">
                    <div className="status col-md-8">
                        <div className="active-bounties">
                            <h6>Active Bounties ({2})</h6>
                            
                        </div>
                        <div className="details col-md-12">
                            <div className="details-1 col-md-6">
                                <div className='a1'>
                                    <div className="file">
                                        <img src={file}  alt ="" />
                                        <p>Project/Task</p>
                                    </div>
                                    <h6>Conditionals: Learning Grammer</h6>
                                    <div className='color-button'>
                                        <button className='b1'>Critical</button>
                                        <button className='b2'>High</button>
                                        <button className='b3'>medium</button>
                                        <button className='b4'>Low</button>
                                    </div>
                                    <div className="calender">
                                        <img src={calender}  alt ="" />
                                        <p>Due Dec 12(11 day)</p>
                                    </div>
                                    <hr className="hrLine" />
                                    <p>3/12 Subtasks completed</p>
                                    <div className='profile-icon'>
                                        <img src={profilePicture} alt="" />
                                        <div className='msj-link'>
                                            <img src={msj} alt="" /> <span>{3}</span>
                                            <img src={link} alt="" /> <span>{3}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="details-1 col-md-6">
                                <div className='a1'>
                                <div className="file">
                                        <img src={file}  alt ="" />
                                        <p>Project/Task</p>
                                    </div>
                                    <h6>Conditionals: Learning Grammer</h6>
                                    <div className='color-button'>
                                        <button className='b1'>Critical</button>
                                        <button className='b2'>High</button>
                                        <button className='b3'>medium</button>
                                        <button className='b4'>Low</button>
                                    </div>
                                    <div className="calender">
                                        <img src={calender} alt ="" />
                                        <p>Due Dec 12(11 day)</p>
                                    </div>
                                    <hr className="hrLine"/>
                                    <p className= "hr-line">3/12 Subtasks completed</p>
                                    <div className='profile-icon'>
                                        <img src={profilePicture} alt="" />
                                        <div className='msj-link'>
                                            <img src={msj} alt="" /> <span>{3}</span>
                                            <img src={link} alt="" /> <span>{3}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 chart">

                            <div className="col-md-5 chart1">

                                <CircleChart />

                            </div>

                            <div className="col-md-7 chart2">
                                <div className="barchart-heading">
                                    <h6>Productivity Rate</h6>
                                    <p>Year</p>
                                </div>
                                <div className="barchart">
                                    <MainBar />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-list col-md-4">
                        <div>
                            <h6>Users</h6>
                        </div>
                        <div className="user-container">
                            <div className='white-container'>
                                <div className="white-top">
                                    <div className="participant">
                                        <img src={calender} alt="" />
                                        <p>All Participants</p>
                                    </div>
                                    <p id='view-all-bounties-option'>View All</p>
                                </div>

                                <div className="user-list">
                                    <div className="user-detail">
                                        <div className="user-icon">
                                            <img src={profilePicture} alt="" />
                                            <div className='user-name'>
                                                <p>Courtney Henry</p>
                                                <span id='address'>@address</span>
                                            </div>
                                        </div>   
                                        <div className='user-prise'>
                                            <span>$710.68</span>
                                        </div>
                                    </div>

                                    <div className="user-detail">
                                        <div className="user-icon">
                                            <img src={profilePicture} alt="" />
                                            <div className='user-name'>
                                                <p>Courtney Henry</p>
                                                <span id='address'>@address</span>
                                            </div>
                                        </div>   
                                        <div className='user-prise'>
                                            <span>$710.68</span>
                                        </div>
                                    </div>

                                    <div className="user-detail">
                                        <div className="user-icon">
                                            <img src={profilePicture} alt="" />
                                            <div className='user-name'>
                                                <p>Courtney Henry</p>
                                                <span id='address'>@address</span>
                                            </div>
                                        </div>   
                                        <div className='user-prise'>
                                            <span>$710.68</span>
                                        </div>
                                    </div>

                                    <div className="user-detail">
                                        <div className="user-icon">
                                            <img src={profilePicture} alt="" />
                                            <div className='user-name'>
                                                <p>Courtney Henry</p>
                                                <span id='address'>@address</span>
                                            </div>
                                        </div>   
                                        <div className='user-prise'>
                                            <span>$710.68</span>
                                        </div>
                                    </div>  

                                    <div className="user-detail">
                                        <div className="user-icon">
                                            <img src={profilePicture} alt="" />
                                            <div className='user-name'>
                                                <p>Courtney Henry</p>
                                                <span id='address'>@address</span>
                                            </div>
                                        </div>   
                                        <div className='user-prise'>
                                            <span>$710.68</span>
                                        </div>
                                    </div>

                                    <div className="user-detail">
                                        <div className="user-icon">
                                            <img src={profilePicture} alt="" />
                                            <div className='user-name'>
                                                <p>Courtney Henry</p>
                                                <span id='address'>@address</span>
                                            </div>
                                        </div>   
                                        <div className='user-prise'>
                                            <span>$710.68</span>
                                        </div>
                                    </div>

                                    <div className="user-detail">
                                        <div className="user-icon">
                                            <img src={profilePicture} alt="" />
                                            <div className='user-name'>
                                                <p>Courtney Henry</p>
                                                <span id='address'>@address</span>
                                            </div>
                                        </div>   
                                        <div className='user-prise'>
                                            <span>$710.68</span>
                                        </div>
                                    </div>

                                    <div className="user-detail">
                                        <div className="user-icon">
                                            <img src={profilePicture} alt="" />
                                            <div className='user-name'>
                                                <p>Courtney Henry</p>
                                                <span id='address'>@address</span>
                                            </div>
                                        </div>   
                                        <div className='user-prise'>
                                            <span>$710.68</span>
                                        </div>
                                    </div>

                                    <div className="user-detail">
                                        <div className="user-icon">
                                            <img src={profilePicture} alt="" />
                                            <div className='user-name'>
                                                <p>Courtney Henry</p>
                                                <span id='address'>@address</span>
                                            </div>
                                        </div>   
                                        <div className='user-prise'>
                                            <span>$710.68</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}