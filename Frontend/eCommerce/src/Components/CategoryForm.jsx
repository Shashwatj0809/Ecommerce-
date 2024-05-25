import React from 'react'

const CategoryForm = ({handleSubmit,value,setvalue})=>{
  return (
    <div>
        <div className="mb-3">
            <input type="text" className='form-control' placeholder='Enter new category'
            value={value}
            onChange={(e)=>setvalue(e.target.value)}/>
        </div>
        <button type="submit" onClick={handleSubmit} className='categoryButton'>Submit</button>
      
    </div>
  )
}

export default CategoryForm
