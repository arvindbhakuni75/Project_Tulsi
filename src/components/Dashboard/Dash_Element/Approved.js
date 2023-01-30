
import React from 'react';

import userImg from '../../images/userImage.png';
import userImg2 from '../../images/userImage2.png';
import userImg3 from '../../images/userImage3.png';
import userImg4 from '../../images/userImage4.png';

export default function Approved () {
    return (
        <>
            <div className="all-bounties">
                <div className="all-bounties1">
                    <h6>User Name</h6>
                </div>
                <div className="all-bounties2">
                    <h6>Payable Amount</h6>
                </div>
            </div>

            <div className="user-heading-line row">
                <div className="user-line col-md-10">
                    <div className="user-img">
                        <img src={userImg} alt="" />
                    </div>
                    <div className="user-name">
                        <ul>
                            <li>Name:</li>
                            <li>User ID:</li>
                            <li>Bug Report:</li>
                            <li>Submission Date</li>
                            <li>Approved Date</li>
                        </ul>
                    </div>
                    <div className="user-name">
                        <ul>
                            <li>Cameron Williamson</li>
                            <li>ABC1232</li>
                            <li>https://www.google.com  <span id='high'>High</span></li>
                            <li>19/12/2022</li>
                            <li>01/12/2022 Date</li>
                        </ul>
                    </div>
                </div>
                <div className="payment col-md-2">

                    <button>Pay $630.50</button>
                </div>
            </div>

            <div className="user-heading-line row">
                <div className="user-line col-md-10">
                    <div className="user-img">
                        <img src={userImg2} alt="" />
                    </div>
                    <div className="user-name">
                        <ul>
                            <li>Name:</li>
                            <li>User ID:</li>
                            <li>Bug Report:</li>
                            <li>Submission Date</li>
                            <li>Approved Date</li>
                        </ul>
                    </div>
                    <div className="user-name">
                        <ul>
                            <li>Cameron Williamson</li>
                            <li>ABC1232</li>
                            <li>https://www.google.com  <span id='high'>High</span></li>
                            <li>19/12/2022</li>
                            <li>01/12/2022 Date</li>
                        </ul>
                    </div>
                </div>
                <div className="payment col-md-2">

                    <button>Pay $630.50</button>
                </div>
            </div>

            <div className="user-heading-line row">
                <div className="user-line col-md-10">
                    <div className="user-img">
                        <img src={userImg3} alt="" />
                    </div>
                    <div className="user-name">
                        <ul>
                            <li>Name:</li>
                            <li>User ID:</li>
                            <li>Bug Report:</li>
                            <li>Submission Date</li>
                            <li>Approved Date</li>
                        </ul>
                    </div>
                    <div className="user-name">
                        <ul>
                            <li>Cameron Williamson</li>
                            <li>ABC1232</li>
                            <li>https://www.google.com  <span id='high'>High</span></li>
                            <li>19/12/2022</li>
                            <li>01/12/2022 Date</li>
                        </ul>
                    </div>
                </div>
                <div className="payment col-md-2">

                    <button>Pay $630.50</button>
                </div>
            </div>

            <div className="user-heading-line row">
                <div className="user-line col-md-10">
                    <div className="user-img">
                        <img src={userImg4} alt="" />
                    </div>
                    <div className="user-name">
                        <ul>
                            <li>Name:</li>
                            <li>User ID:</li>
                            <li>Bug Report:</li>
                            <li>Submission Date</li>
                            <li>Approved Date</li>
                        </ul>
                    </div>
                    <div className="user-name">
                        <ul>
                            <li>Cameron Williamson</li>
                            <li>ABC1232</li>
                            <li>https://www.google.com  <span id='high'>High</span></li>
                            <li>19/12/2022</li>
                            <li>01/12/2022 Date</li>
                        </ul>
                    </div>
                </div>
                <div className="payment col-md-2">

                    <button>Pay $630.50</button>
                </div>
            </div>
        </>
    );
}