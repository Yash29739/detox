import React, { useState } from 'react'
import './LogIn.css' 
import { FaUser,FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const LogIn = () => {
    const[action,setAction]=useState('');

    const registerLink =()=>{
        setAction('active');
    }
    const LogInLink =()=>{
        setAction('');
    }
  return (
    <div className="container">
        <div  className={`wrapper ${action}`}>
                <div className="form-box logIn">
                    <form action="">
                        <h1>LogIn</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required/>
                            <FaUser className='icon'/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required/>
                            <FaLock className='icon'/>
                        </div>
                        <div className="remember-forgot">
                            <label ><input type="checkbox" />Remember Me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit">LogIn</button>
                        <div className="register-link">
                            <p>Dont have an Account? <a href="#" onClick={registerLink}>Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <form action="">
                        <h1>Sign Up</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required/>
                            <FaUser className='icon'/>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder='Email' required/>
                            <MdEmail className='icon'/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required/>
                            <FaLock className='icon'/>
                        </div>
                        <div className="remember-forgot">
                            <label ><input type="checkbox" />I agree to the terms & conditions</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit">SignUp</button>
                        <div className="register-link">
                            <p>Have an Account Already? <a href="#" onClick={LogInLink} >Log-In</a></p>
                        </div>
                    </form>
                </div>
        </div>
    </div>

  )
}

export default LogIn