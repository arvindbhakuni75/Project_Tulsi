
import React,{useState, useRef} from 'react';

import Logo from '../../images/Tulsi-Logo.png'
import img from '../../images/userprofileimg.png';
import {NavLink, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { FiEdit } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import { MdDelete, MdLogout} from "react-icons/md";


export default function Navbar () {

    const [file, setFile] = useState(img);
    const data = useRef();

    
    

    const navigate = useNavigate();
    const localName = localStorage.getItem("name");
    // const localSignUP = localStorage.getItem("signup");

   

        function handleChange(e) {
            
            setFile(URL.createObjectURL(e.target.files[0]));
            localStorage.setItem("ProfilePicture:", data.current.value)
        }

        const logout = () => {
            localStorage.removeItem("signup");
            navigate("/")
            // window.location.reload();     
        }

        const deleteAccount = () => {
            localStorage.clear();
            window.location.reload();
        }

    return (
        <>
            <div className='row dashboard-nav'>
                <div className="col-md-2 dash-nav-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="col-md-6">
                    <nav className="dash-navbar navbar-expand-lg  ">
                        <div className="container-fluid">

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav dash-nav-ul me-auto mb-2 mb-lg-0">
                                <li className="dash-nav-item">
                                    <NavLink style={({isActive})=>{return{color: isActive ? "rgb(128, 249, 63)" : ""}}}  className="dash-nav-link active" aria-current="page" to ="/deshboard/">Dashboard</NavLink>
                                </li>
                                <li className="dash-nav-item">
                                    <NavLink style={({isActive})=>{return{color: isActive ? "rgb(128, 249, 63)" : ""}}} className="dash-nav-link" to="/deshboard/bounties">Bounties</NavLink>
                                </li>
                                <li className="dash-nav-item">
                                    <NavLink style={({isActive})=>{return{color: isActive ? "rgb(128, 249, 63)" : ""}}} className="dash-nav-link" to="/deshboard/submission">Submission</NavLink>
                                </li>
                                <li className="dash-nav-item">
                                    <NavLink style={({isActive})=>{return{color: isActive ? "rgb(128, 249, 63)" : ""}}} className="dash-nav-link" to="/deshboard/approved">Approved</NavLink>
                                </li>
                                <li className="dash-nav-item">
                                    <NavLink style={({isActive})=>{return{color: isActive ? "rgb(128, 249, 63)" : ""}}} className="dash-nav-link" to="/deshboard/buckt">Bucket</NavLink>
                                </li>
                                
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                </div>
                        <div className="col-md-4 creat-bounty-btn">
                            <button id='create-bountie-button'>Create Bounties +</button>
                            <img src = {file} className='profilePicture' alt="" />

                             <Nav className='dropdown'>
                                <NavDropdown
                                id="nav-dropdown-dark-example"
                                title=""
                                menuVariant="light"
                                >
                                <NavDropdown.Item href="#action/3.1" id="drop-user-name">{localName}</NavDropdown.Item>

                                
                                {/* <NavDropdown.Divider /> */}

                                <NavDropdown.Item href="#action/3.5">
                                    <button className='dashboard-dropdown-buttons'><AiFillHome className="react-drop-icon" /><span>My Profile</span></button>
                                </NavDropdown.Item>

                                <NavDropdown.Item  href="#action/3.2">
                                    <button className='dashboard-dropdown-buttons'>
                                        <label className='Edit-profile-pic' htmlFor="Pimgs">
                                        <FiEdit className="react-drop-icon" /><span>Edit Profile</span>
                                        </label>
                                        <input id='Pimgs' type="file" accept="image/*" onChange={handleChange} ref = {data} />
                                    </button>
                                    
                                </NavDropdown.Item>

                                    
                                

                                <NavDropdown.Item href="#action/3.5">
                                
                                        <button className='dashboard-dropdown-buttons'><FaUserPlus className="react-drop-icon" /><span>Add User</span></button>
                                    
                                </NavDropdown.Item>


                                <NavDropdown.Item href="#action/3.4">
                                    <button className='dashboard-dropdown-buttons' onClick={logout}><MdLogout className="react-drop-icon" /><span>Log Out</span></button>
                                </NavDropdown.Item>
                                
                                <NavDropdown.Item href="#action/3.3">
                                    <button className='dashboard-dropdown-buttons' onClick={deleteAccount}><MdDelete className="react-drop-icon" /><span>Delete Account</span></button>
                                </NavDropdown.Item>

                                </NavDropdown>
                            </Nav>

                        </div>
            </div>
        </>
    );
}



