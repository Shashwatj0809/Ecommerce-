
import React from 'react'
// import { AiTwotoneShopping } from "react-icons/ai";
import {NavLink} from 'react-router-dom'
import { useAuth } from '../context/auth'
import { RiShoppingBag3Line } from "react-icons/ri";

const Navbar = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('token');
  }
  return (
    <div>
      <div className='navContainer'>
        
        <h1 className="navheading"><RiShoppingBag3Line /><span>Ecommerce</span></h1>
        <div className='navContent'>
        <h3 className='navContent1'><NavLink to='./' className='navRouter'>Home</NavLink></h3>
        {
          !auth.user ?(<>
          <h3 className='navContent2'><NavLink to='./register' className='navRouter'>Register</NavLink></h3>
          <h3 className='navContent3'><NavLink to='./login' className='navRouter'>Login</NavLink></h3>
          </>) :(<>
          <h3 className='navContent3'><NavLink onClick={handleLogout} to='./login' className='navRouter'>logout</NavLink></h3>
          </>)
        }
        <h3 className='navContent4'><NavLink to='./user/dashboard' className='navRouter'>Dashboard</NavLink></h3>
        <h3 className='navContent4'><NavLink to='./order' className='navRouter'>Order</NavLink></h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
