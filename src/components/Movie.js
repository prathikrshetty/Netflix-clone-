import { Button, Modal } from '@mui/material'
import { useState , useEffect } from 'react'
import Delete from './Delete'
import SingleView from './SingleView'

import React from 'react'
import { Value } from 'sass'

export default function Movie() {


  
  const [openModal,setOpenModal] = useState(false);
  const [selectedUser ,setselectedUser] = useState('')
  const [userMovies,setUserMovies]=useState('')


  const handleSingleView = (id)=>{
    setOpenModal(true)
    setselectedUser(id)
  }

  const handleDelete = (id)=>{
    setOpenModal(true)
    setselectedUser(id)
  }
  const handleCloseModel = () => {
    setOpenModal(false);
  }
  

  
    useEffect(()=>{
        setUserMovies(JSON.parse(localStorage.getItem('Movie')))
    },[])

  

  

      
  return (

    <div className="list">
      <div className="row">

        <h2 className=" text-white title">Trending</h2>
        {userMovies?.map((Value,index) =>(

        
        <div className="col" key={index}>
          <div className="row_posters">
        
          <img
                className="row__poster row__posterLarge" 
                src='https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ePquoeNxJ6vg8U7iSjRAZ2KdztX.jpg'
            alt=''
            onClick={() => {
              handleSingleView(Value.u_id);
              handleDelete(Value.u_id);
            }}
          
          
              
          />


<img
  className="row__poster row__posterLarge"
  src='https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg'
  alt=''
  onClick={() => {
    handleSingleView(Value.u_id);
    handleDelete(Value.u_id);
  }}

/>

          

          </div>
        </div>
))}
      </div>
  
<div>
<Modal open={openModal} onClose={handleCloseModel}>
        <div>
          <Button className='btn btn-danger' onClick={() => handleSingleView(selectedUser)}>View</Button>
          <Button className='btn btn-danger' onClick={() => handleDelete(selectedUser)}>Delete</Button>
        </div>
      </Modal>
</div>

    </div>
    
    
  )
}
