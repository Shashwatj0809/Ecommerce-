import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth'
import {Outlet} from "react-router-dom"
import Spinners from '../Components/spinner'
import axios from 'axios'

const Protected = () => {
    const[ok,setOk]=useState(false)
    const[auth,setAuth]=useAuth()

    useEffect(()=>{
        const authCheck=async()=>{
            const res=await axios.get('http://localhost:6060/auth-check');
            // return(
            //     auth.token ? <Outlet /> :<Spinner />
            // )
            if(res.data.ok){
                console.log("true");
                setOk(true)
            }
            else{
                setOk(false)
            }
        }
        if(auth?.token) authCheck();
    },[auth?.token]);

  return ok ? <Outlet /> : <Spinners />
}
// const Admin = () => {
//     const[ok,setOk]=useState(false)
//     const[auth,setAuth]=useAuth()

//     useEffect(()=>{
//         const authCheck=async()=>{
//             const res=await axios.get('http://localhost:6060/admin-check');
//             // return(
//             //     auth.token ? <Outlet /> :<Spinner />
//             // )
//             if(res.data.ok){
//                 setOk(true)
//             }
//             else{
//                 setOk(false)
//             }
//         }
//         if(auth?.token) authCheck();
//     },[auth?.token]);

//   return ok ? <Outlet /> : <Spinners />
// }
export default Protected
