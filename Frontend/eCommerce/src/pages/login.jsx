import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';


const Login = () => {
    // const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const[auth,setAuth]=useAuth();
    const nav=useNavigate();

    const handleLogin=async(e)=>{
        try{
            console.log("hi");
            
            const response= await axios({
                method:'post',
                url:"http://localhost:6060/login",
                headers:{
                    "Content-Type":"application/json"
                },
                data:{
                    email:email,
                    password:password,
                }});
                if (response.data.success) {
                    
                    setAuth({
                        ...auth,
                        user:response.data.user,
                        token:response.data.token,
                    })
                    localStorage.setItem("auth",JSON.stringify(response.data));
                    nav("/");
                } else {
                    nav("/register");
                }
            
        }
        catch(error){
            console.log(error);

        }
    }

  return (
    <div>
      <div>
        <div className='loginHeading'><h1>Login</h1></div>
        <div className="loginDetails">
            <form className='loginContainer'>
                {/* <input type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='name'
                className='name' /> */}

                <input type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='email'
                className='email' />

                <input type='text'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
                className='password' />

            </form>
            <button 
            className='loginButton'
            onClick={handleLogin}>Submit</button>
        </div>
      
    </div>
    </div>
  )
}

export default Login
