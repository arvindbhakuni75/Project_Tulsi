

    import './SignUp.css';
    import Input from './input';
    import { useForm } from "react-hook-form";
    import { yupResolver } from "@hookform/resolvers/yup";
    import * as yup from "yup";
    import { Link,  } from 'react-router-dom';
    import Axios from 'axios';
    

    const schema = yup.object({
        username: yup.string().required("Enter your Name"),
        email: yup.string().min(6, "Enter a valid email"),
        password: yup.string().min(6, "Password must be 6 characters"),
        conformPassword: yup.string().oneOf([yup.ref("password")],"Password must be match"),
    })

    function SignUp() {       
        const { handleSubmit, register, formState: {errors} } = useForm({
            resolver: yupResolver(schema)
        });

        var username;
        var email;
        var password;
        
        const formSubmit = (data) => {
            username = data.username
            email = data.email
            password = data.password
            // sendData()
        }

        // const sendData = () =>{
        //     Axios.post('http://localhost:5000/users', {
        //          username: username,
        //          email: email,
        //          password: password
        //     })
        // }

        
    
        return (
            <div className="signup-form-section">
                <div className='signup-form-container'>
                    
                        <form onSubmit={handleSubmit(formSubmit)}>
                            <h3 className="card-title">Enter your details blow to create an account.</h3>
                            
                            <div className="md-3">
                                
                                <Input
                                    id = "username"
                                    label="Username"
                                    type="text"
                                    placeholder = "Enter Username"
                                    register = {{...register("username")}}
                                    errorMessage = { errors.username?.message}
                                    
                                />

                            </div>
                            <div className="md-3">
                                
                                <Input
                                    id = "email"
                                    label="Email"
                                    type="email"
                                    placeholder = "Enter Email"
                                    register = {{...register("email")}}
                                    errorMessage = { errors.email?.message}
                                    
                                />

                            </div>
                            <div className="md-3">
                                
                                <Input
                                    id = "password"
                                    label="Password"
                                    type="password"
                                    placeholder = "Enter Password"
                                    register = {{...register("password")}}
                                    errorMessage = { errors.password?.message}
                                    
                                />
 
                            </div>
                            <div className="md-3">
                            
                                <Input
                                    id = "confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    placeholder = "Conform Password"
                                    register = {{...register("conformPassword")}}
                                    errorMessage = { errors.conformPassword?.message}
                                />
                            
                            </div>
                            
                            <button  className="btn-2 btn-dark" >Sign-up</button>
                            <p className="account-already">Already have an account?<Link className='back-to-login' to='/login'> Login</Link></p>
                            <Link className='back-to-login' to='/deshboard/'> Go to Dashboard</Link>
                        </form>
                </div>
            </div>
        );
    }

    export default SignUp;