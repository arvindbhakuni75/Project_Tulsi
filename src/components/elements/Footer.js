
import React from "react";

import Logo from '../images/Tulsi-Logo.png';
import Facebook from '../images/facebook.png';
import Twiter from '../images/twiter.png';
import Youtube from '../images/Youtube.png';
import Instagram from '../images/instagram.png';

import './Footer.css';


export default function Footer () {
    return(
    
            <section className="section footer-section">
                    <div className="container footer-container">
                        <div className="row ">
                            <div className="col-md-6">
                                <h1 className="main-heading subscribe">Subscribe Now & Connect With Us</h1>
                            </div>
                            <div className="col-md-6 email">
                                <input type="text" className="email-input " placeholder="Your Email Address" />
                                <button className="btn btn-light Join-btn">Join Now</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container">
                    <div className="row info-row">
                        <div className="col-md-6">
                            <div className="col-md-6 Tulsi-logo">
                                
                                <img src={Logo} alt="" />
                                <p>Argues reality has been a hug industry in the World</p>

                                <div className="icon">
                                    <img src={Facebook} alt="ic1" />
                                    <img src={Twiter} alt="ic2" />
                                    <img src={Youtube} alt="ic3" />
                                    <img src={Instagram} alt="ic4" />
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <div className="col-md-6 information">
                            <div className="col-md-4 info">
                                <h6>Explore</h6>
                                
                                    <p><a href="/">about</a></p>
                                    <p><a href="/">carrier</a></p>
                                    <p><a href="/">Legal Privaccy</a></p>
                                    <p><a href="/">Domain Names</a></p>
                                    <p><a href="/">Virtual World</a></p>
                                
                            </div>
                            <div className="col-md-4 info">
                                <h6>Contect us</h6>
                                
                                    <p><a href="/">abc@gmaail.com</a></p>
                                    <p><a href="/">1234567890</a></p>
                                    <p><a href="/">abc@exm.com</a></p>
                                
                            </div>
                            <div className="col-md-4 info">   
                                <h6>Newsleetter</h6>
                                <p>How to use website any perfoner</p>
                                <button>Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}


