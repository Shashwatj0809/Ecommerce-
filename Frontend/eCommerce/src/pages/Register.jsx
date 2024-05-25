import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [contact,setContact]=useState('');
    const [password,setPassword]=useState('');
    const [address,setAddress]=useState('');
    const [role,setRole]=useState('0');
    const nav=useNavigate();


    const handleRegister=async(e)=>{
        try{
            console.log("hi");
            
            const response= await axios({
                method:'post',
                url:"http://localhost:6060/register",
                header:{
                    "Content-Type":"application/json"
                },
                data:{
                    name:name,
                    email:email,
                    contact:contact,
                    password:password,
                    address:address,
                    role:role,
                }});
                if (response.data.success) {
                    nav("/login");
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
        <div className='registerHeading'><h1>Register</h1></div>
        <div className="registerDetails">
            <form className='registerContainer'>
                <input type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='name'
                className='name' />

                <input type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='email'
                className='email' />

                <input type='text'
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
                placeholder='contact'
                className='contact' />

                <input type='text'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
                className='password' />

                <input type='text'
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                placeholder='address'
                className='address' />
            </form>
            <button 
            className='registerButton'
            onClick={handleRegister}>Submit</button>
        </div>
      
    </div>
  )
}

export default Register
