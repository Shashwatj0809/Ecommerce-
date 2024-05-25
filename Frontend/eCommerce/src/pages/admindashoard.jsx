import React from 'react'
import Card from 'react-bootstrap/Card'
import Navbar from '../Components/navbar'
import { NavLink } from 'react-router-dom'

const Admindashoard = () => {
  return (  
    <div>
      <div className="navposition"><Navbar /></div>
      
    <div className="content-container">
      <div className='ContainerAdminCard'>
        {/* <div className="ContainerCard"> */}
          <Card className='AdminCard'>
            <Card.Body><strong><span><NavLink to='./create'>Create Category</NavLink></span></strong></Card.Body>
          </Card>
          <Card className='AdminCard'>
            <Card.Body><strong><span><NavLink to='./products'>Create Product</NavLink></span></strong></Card.Body>
          </Card>
        
        
          <Card className='AdminCard'>
            <Card.Body><strong><span><NavLink to='./admin/dashboard/customer'>Customer details</NavLink></span></strong></Card.Body>
          </Card>
          <Card className='AdminCard'>  
            <Card.Body><strong><span><NavLink to='./admin/dashboard/Product'>Product details</NavLink></span></strong></Card.Body>
          </Card>
        {/* </div> */}
      
      </div>
    </div> 
    </div>
  )
}

export default Admindashoard


// import React from 'react'
// import Card from 'react-bootstrap/Card'
// import Navbar from '../Components/navbar'
// import { NavLink } from 'react-router-dom'

// const Admindashoard = () => {
//   return (  
//     <div>
//       <Navbar />
//       <div className='ContainerAdminCard'>
//         <div className="ContainerCard">
//           <Card className='AdminCard'>
//             <Card.Body><strong><span><NavLink to='./admin/dashboard/create'>Create Product</NavLink></span></strong></Card.Body>
//           </Card>
//           <Card className='AdminCard'>
//             <Card.Body><strong><span><NavLink to='./admin/dashboard/earning'>Earning</NavLink></span></strong></Card.Body>
//           </Card>
//         </div>
//         <div className="ContainerCard">
//           <Card className='AdminCard'>
//             <Card.Body><strong><span><NavLink to='./admin/dashboard/customer'>Customer details</NavLink></span></strong></Card.Body>
//           </Card>
//           <Card className='AdminCard'>  
//             <Card.Body><strong><span><NavLink to='./admin/dashboard/Product'>Product details</NavLink></span></strong></Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div> 

 
//   )
// }

// export default Admindashoard


// {/* <Navbar />
// <div className='ContainerAdminCard'>
// <div className="ContainerCard">
// <Card className='AdminCard'>
// <Card.Body><strong><span>Create Product</span></strong></Card.Body>
// </Card>
// <Card className='AdminCard'>
// <Card.Body><strong><span>Earning</span></strong></Card.Body>
// </Card>
// <Card className='AdminCard'> 
// <Card.Body><strong><span>View sales</span></strong></Card.Body>
// </Card>
// <Card className='AdminCard'>
// <Card.Body><strong>Customer details</strong></Card.Body>
// </Card>
// </div>

// </div>
// </div>  */}