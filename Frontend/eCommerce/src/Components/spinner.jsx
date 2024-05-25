import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import BootstrapSpinner from 'react-bootstrap/Spinner';


function Spinners() {
    const[count,setCount]=useState(5);
    const nav=useNavigate()

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prevValue)=>--prevValue);
        },1000);
        count ===0 && nav('/login')
        return ()=>clearInterval(interval)
    },[count,nav])
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>\
    <BootstrapSpinner animation="border" role="status" style={{ color: 'white' }}>
      <span className="visually-hidden" style={{color:'white'}}>Loading...</span>
    </BootstrapSpinner>
    </div>
  );
}

export default Spinners;
