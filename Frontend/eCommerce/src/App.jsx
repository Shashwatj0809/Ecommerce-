
import './App.css'
import Home from './pages/home'
import Register from './pages/Register'
import Login from './pages/login'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Protected from './Routes/protected'
import Admin from './Routes/adminProtection'
import Admindashoard from './pages/admindashoard'
import AdminCreateProduct from './pages/AdminCreateProduct'
import AdminProduct from './pages/AdminProduct'


import React from 'react'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/user/dashboard' element={<Protected />} >
        <Route path='' element={<Dashboard/>} />
      </Route>
      <Route path='/admin/dashboard' element={<Admin />} >
       <Route path='' element={<Admindashoard/>} />
       <Route path='create' element={<AdminCreateProduct />} />
       <Route path='products' element={<AdminProduct />} />

      </Route>
      

    </Routes>
    
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
