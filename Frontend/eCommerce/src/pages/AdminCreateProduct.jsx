import React, { useEffect, useState } from 'react';
import Admindashoard from './admindashoard';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; // Import Form from react-bootstrap for structured form elements
import axios from 'axios';
import CategoryForm from '../Components/CategoryForm';


const AdminCreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [editCategoryName, setEditCategoryName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (categoryName) => {
    setEditCategoryName(categoryName);
    setShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addCategory = await axios({
        method: 'post',
        url: "http://localhost:6060/addCategory",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: name,
        }
      });
      if (addCategory?.data?.success) {
        alert(`${name} is created`);
        categoryCollection();
      } else {
        alert(addCategory.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const categoryCollection = async () => {
    try {
      const { data } = await axios.get("http://localhost:6060/allCategory");
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categoryCollection();
  }, []);

  const handleEditSubmit = () => {
    // Handle the edit submit logic here
    console.log("Edited category name:", editCategoryName);
    handleClose();
  };
  const handleDelete=async()=>{
    try{
      const {data}=await axios.put("http://localhost:6060/deleteCategroy");
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <div className="adminCreateProduct">
        <Admindashoard />
        <div className="createProduct">
          <div className="createHeader">
            <h1>Manage Category</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category._id}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>
                      <Button variant="primary" onClick={() => handleShow(category.name)}>
                        Edit
                      </Button>
                    </td>
                    <td><button className="deleteCategory" onClick={()=>{handleDelete(category._id)}}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <Form>
            <Form.Group controlId="formCategoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                value={editCategoryName}
                onChange={(e) => setEditCategoryName(e.target.value)}
                placeholder="Enter new category name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminCreateProduct;


// import React, { useEffect, useState } from 'react';
// import Admindashoard from './admindashoard';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';
// import CategoryForm from '../Components/CategoryForm';

// const AdminCreateProduct = () => {
//   const [categories,setCategories]=useState([]);
//   const [name,setName]=useState("");
//   const [show, setShow] = useState(false);
//   const [update,setUpdate]=useState("")
//   const handleClose = () => setShow(false);
//   const handleShow = (categoryName) => {
//     setEditCategoryName(categoryName);
//     setShow(true);
//   };


//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     try{
//       const addCategory=await axios({
//         method:'post',
//         url:"http://localhost:6060/addCategory",
//         headers:{
//           "Content-Type":"application/json"
//         },
//         data:{
//           name:name,
//         }
//       }
//       )
//       if (addCategory?.data?.success) {
//         alert(`${name} is created`);
//         categoryCollection();
//       } else {
//         alert(addCategory.data.message);
//       }

//     }
//     catch(error){
//       console.log(error);

//     }
//   }

//     const categoryCollection=async()=>{
//       try{
//         const {data}=await axios.get("http://localhost:6060/allCategory")
//         if(data.success){
//           setCategories(data.category)
//         }

//       }
//       catch(error){
//         console.log(error);
//       }
//     }
//     useEffect(()=>{
//       categoryCollection();
//     },[]);

//     const handleEditSubmit = () => {}
//       console.log("Edited category name:", editCategoryName);
//       handleClose();
//     };
  

//   return (
//     <div>
//       <div className="adminCreateProduct">
//         <Admindashoard />
//         <div className="createProduct">
//         <div className="modaldiv" >
//        <Modal show={show} onHide={handleClose}>
//         <Modal.Header >
//           <Modal.Title><div className='modaltext1'>Changes the category</div></Modal.Title>
//         </Modal.Header>
//         <Modal.Body className='modal-body-custom'> 
//            <Form>
//             <Form.Group controlId="formCategoryName">
//               <Form.Label>Category Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={editCategoryName}
//                 onChange={(e) => setEditCategoryName(e.target.value)}
//                 placeholder="Enter new category name"
//               />
//             </Form.Group>
//           </Form></Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleEditSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//         <CategoryForm value={update} setvalue={setUpdate} handleSubmit={handleUpdate} />
//       </Modal>
//       </div>
//           <div className='createHeader'>
//             <h1>Manage Category</h1>
//           <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Name</th>
//           <th>Edit</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {categories.map((category,index)=>(
//           <tr key={category._id}>
//             <td>{index+1}</td>
//             <td>{category.name}</td>
//             <td><Button variant="primary" onClick={handleShow} onClick={()=>{setUpdate(category.name)}}>Edit</Button></td>
            
//             <td><button>Delete</button></td>
//           </tr>
//         ))}


//       </tbody>
//     </Table>
//     <CategoryForm handleSubmit={handleSubmit} value={name} setvalue={setName} />
//      </div>
//        </div>
//        {/* <div className="modaldiv" >
//        <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title><div className='modaltext1'>Changes the category</div></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       </div> */}
  
//   </div>
//  </div>
      
    
//   );

// };
// export default AdminCreateProduct;


// import React from 'react'
// import Admindashoard from './admindashoard'

// const AdminCreateProduct = () => {
//   return (
//     <div>
//       <div className="createProduct">
//       <Admindashoard />
//       <h1 className='createHeader'>Create</h1>
//       </div>
//     </div>
//   )
// }

// export default AdminCreateProduct


// const {data}=await axios.post("http://localhost:6060/addCategory",{name})