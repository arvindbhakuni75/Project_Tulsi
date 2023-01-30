
    import './Login.css';

    import { Link } from 'react-router-dom';
    // import axios from 'axios';

    import React, { useRef } from "react";
    import {useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function Sign_up() {

       const [name, setName] = useState("");
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const [Confirmpassword, setConPassword] = useState("");
       const [error, setError] = useState(false);

       const navigate = useNavigate();
       const handleSubmit = (e) => {
            e.preventDefault() 
            if (email.length <5 || password.length <6 || Confirmpassword !==password ){
                setError(true)
            }  
            
            if(email&&password <6) {
                setPassword("");
            }
            
        }
        const handleName = (e) => {
            setName (e.target.value)
        }
        const handleEmail = (e)=>{
            setEmail (e.target.value)
        }
        const handlePassword = (e) => {
            setPassword(e.target.value)
        }
        const handleCnfPassword = (e) => {
            setConPassword(e.target.value)
        }
   
        const Uname = useRef();
        const Uemail = useRef();
        const Upassword = useRef();
        const ConfirmUpassword = useRef();
        const [showLogin, setShowLogin] = useState(false);
        
        // useEffect (()=> {
        //     if(localSignUP){
        //         setShowLogin(true)
        //     }
        // })

        const handleClick = () => {
            if(Uname.current.value&&Uemail.current.value&&Upassword.current.value)
             {
                localStorage.setItem("name", Uname.current.value);
                localStorage.setItem("email", Uemail.current.value);
                localStorage.setItem("password", Upassword.current.value);
                localStorage.setItem("signup", Uemail.current.value); 
                
                setTimeout (()=> {
                    if(password === Confirmpassword){
                        setShowLogin(true)
                    }
                }, 300)
             }
          
        }

    return (
    <>
    {showLogin? navigate("/Login"):
    
    <section className="container-fluid ">
        <div className="container sign-up-container">
        <div className='signup-form-container bg-light'>
            <form onSubmit={handleSubmit} method = "POST">
                         
                <div className="mb-3 ">
                        
                        <input
                            id = "username"
                            value={name}
                            type="text"
                            placeholder = "Enter User Nmae"
                            onChange={handleName}
                            ref = { Uname }

                        />  <br />
                        {error&&name.length<=0?
                        <label >Enter User Name</label>: ""}

                    </div>

                    <div className="mb-3">
                        
                        <input
                            id = "email"
                            value={email}
                            type="email"
                            placeholder = "Enter Email"
                            onChange={handleEmail}
                            ref = { Uemail }

                        />  <br />
                        {error&&email.length<=0?
                        <label >Enter a valid email</label>: ""}

                    </div>
                    <div className="mb-3">
                        
                        <input
                            id = "password"
                            value={password}
                            type="password"
                            placeholder = "Enter Password"
                            onChange={handlePassword}
                            ref = { Upassword }

                        /> <br />
                        {error&&password.length<6?
                        <label >Password must be 6 characters</label>:""}

                    </div>

                    <div className="mb-3">
                        
                        <input
                            id = "Confirmpassword"
                            value={Confirmpassword}
                            type="password"
                            placeholder = "Confirm Password"
                            onChange={handleCnfPassword}
                            ref = { ConfirmUpassword }

                        /> <br />
                        {error&&Confirmpassword !==password?
                        <label >Conform password and password must be same</label>:""}

                    </div>
                        
                    <button onClick={handleClick} id='log-btnxxx'>Sign Up</button>

                    <p className="h6 ask"><Link to='/'>Already have an account?</Link> <Link className='back-to-login' to='/login'> Login</Link></p>
          
                </form>
            </div>
            </div>
        </section>   
    }
    </>
    );
}

export default Sign_up;









