
    import './Login.css';

    import Logo from '../images/Tulsi-Logo-dark.png'
    import LoginImg from '../images/Login-image.png';
    import { Link,useNavigate } from 'react-router-dom';
    import { useState } from 'react';


    function Login() {
        
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const [error, setError] = useState(false);
       const Dnavigate = useNavigate();

       const [showHome, setShowHome] = useState(false); 

       const localName = localStorage.getItem("name");
       const localEmail = localStorage.getItem("email");
       const localPassword = localStorage.getItem("password");

       const handleSubmit = (e) => {
            e.preventDefault() 

            if (email.length <5 || password.length <6){
                setError(true)
            }  

            if(email&&password <6) {
                setPassword("")
            }
        }

        const handleEmail = (e)=>{
            setEmail (e.target.value)
        }

        const handlePassword = (e) => {
            setPassword(e.target.value)
        }

        const handleLogin = ()=>{
            
            if(email===localEmail&&password===localPassword){
                localStorage.setItem("login", email); 
                 setShowHome(true)            
            } else {
                alert("email id and password does not match")
            }
        }
        
    return (
    <>
    {showHome? Dnavigate("/deshboard/"):
    <section className='login-section'>
        <div className=" container">
            <div className="row row-item">
                <div className="col-md-4 line">
                    <div className="login-form-wraper">
                        <div className="login-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="welcome">
                        <h1>Welcome <br /> {localName} !</h1>
                    </div>
                </div>
                <div className='loin-form-container'>
            </div> 
                    <form onSubmit={handleSubmit} method = "POST">
               
                            <div className="mb-3">
                                
                                <input
                                    id = "email"
                                    value={email}
                                    type="email"
                                    placeholder = "Enter Email"
                                    onChange={handleEmail}
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
                                /> <br />
                                {error&&password.length<6?
                                <label >Password must be 6 characters</label>:""}
 
                            </div>
                            
                            <p className="h6 reset"><a href='/'>Forgot your password?</a></p>
                                
                            <button onClick={handleLogin} id='log-btnxxx'>Login</button>
  
                                <p className="h6 ask"><Link to='/'>Don't have an account?</Link></p>

                                <Link className='creatLink create-account' to='/sign-Up' >Create account</Link>
                            
                    </form>
                </div>
                <div className="col-md-8 line2">
                    <img src={LoginImg} alt="" />
                </div>
            </div>
        </div>
         
    </section>
    }
    </>
    );
}

export default Login;









