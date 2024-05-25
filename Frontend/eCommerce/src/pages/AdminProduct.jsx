import React, { useState,useEffect } from 'react'
import Admindashoard from './admindashoard'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

const AdminProduct = () => {
    const[name,setName]=useState("");
    const[description,setDescription]=useState("");
    const[price,setprice]=useState("");
    const[quantity,setQuantity]=useState("");
    const[categories,setCategories]=useState([] );
    const[category,setCategory]=useState("");
    const[photo,setPhoto]=useState("");

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

  return (
    <div>
        <div className="productContainer">
            <div className="adminProductContainer">
          <Admindashoard />
          </div>
          <div className="dropDown">
        <Dropdown as={ButtonGroup}>
      <Button variant="success">category</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
      <Dropdown.Menu onChange={(value)=>{setCategory(value)}}>
      {categories?.map((category)=>(
      <td><Dropdown.Item className='dropdownitem' key={category._id} value={category.name}>`{category.name}   `</Dropdown.Item></td>
))}
</Dropdown.Menu>.


    </Dropdown>
    </div>
    </div>
        

    </div>
  )
}

export default AdminProduct


{/* <Dropdown.Menu onChange={(value)=>{setCategory(value)}}>
{categories?.map((category)=>(
    <Dropdown.Item href="#/action-1" key={category._id} value={category.name}>{category.name}</Dropdown.Item>
))}
</Dropdown.Menu> */}