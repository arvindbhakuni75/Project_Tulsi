
import './Navbar.css';
import Logo from '../images/Tulsi-Logo.png';

import { NavLink } from 'react-router-dom';


export default function Navbar () {
    return (
        <>
            <div className="row nav">
                <div className="col-md-4 nav-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="col-md-8 nav-items">

                        {/* Navigation bar */}
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink style={({isActive})=>{return{color: isActive ? "rgb(128, 249, 63)" : ""}}} to="/" className="nav-link active" aria-current="page"  href="#">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink className="nav-link" to='/contect'>Contact</NavLink>
                                
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/price'>Price</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/Service'>Service</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to='/blog'>Blog</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <NavLink className="nav-button-login" to='/login'>Login</NavLink>
                            </form>
                        </div>
                        </div>
                    </nav>


                </div> 
            </div>
        </>
    );
}