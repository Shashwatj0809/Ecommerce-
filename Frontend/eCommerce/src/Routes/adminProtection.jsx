    import React, { useEffect, useState } from 'react'
    import { useAuth } from '../context/auth'
    import {Outlet} from "react-router-dom"
    import Spinners from '../Components/spinner'
    import axios from 'axios'

    const Admin = () => {
        const[ok,setOk]=useState(false)
        const[auth,setAuth]=useAuth()

        useEffect(()=>{
            const authCheck=async(role)=>{
                // const access_token=localStorage.getItem('')
                const res=await axios({
                    method:'GET',
                    url:'http://localhost:6060/admin-check',
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjUwN2I0MzQ5MzY5YzdhMWQzMzFhNDkiLCJpYXQiOjE3MTY1NTA4NDgsImV4cCI6MTcxNzE1NTY0OH0.vFOOAyql0ZbSC2myZk8yBMZVk3guaK9ssej9n0SIDgE"
                    },
                    data:{
                        role:role,
                    }
                })
                // const res=await axios.get('http://localhost:6060/admin-check');
                // return(
                //     auth.token ? <Outlet /> :<Spinner />
                // )
                if(res.data.ok){
                    setOk(true)
                }
                else{
                    setOk(false)
                }
            }
            if(auth?.token) authCheck(auth.role);
        },[auth?.token]);

    return ok ? <Outlet /> : <Spinners />
    }
    export default Admin