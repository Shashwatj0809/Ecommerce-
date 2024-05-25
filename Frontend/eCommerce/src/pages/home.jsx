import React from 'react'
import Layout from '../Components/layout'
import { useAuth } from '../context/auth'

const Home = () => {
  const [auth,setAuth]=useAuth()
  return (
    <div>
        <Layout />  
        <div>
        <pre className='sample'>{JSON.stringify(auth,null,4)}</pre>    
        </div> 
      
    </div>
  )
}

export default Home
