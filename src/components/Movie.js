import { Button, Modal } from '@mui/material';
import { useState, useEffect } from 'react';
import Delete from './Delete';
import SingleView from './SingleView';
import React from 'react';


export default function Movie() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selectedUser, setselectedUser] = useState('');
  const [data, setData] = useState([]);


 



  const handleSingleView = (id) => {
    setselectedUser(id);
    setOpen2(true);
  };

  const handleDelete = (id) => {
    setselectedUser(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen2(false);
    setOpen(false);
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('Movies')) || []);
  }, []);
 console.log(data,"aaaaaaaaaa")

  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">Trending</h2>
        {data?.map((Value, index) => (
          <div className="col" key={index}>
            <div className="row_posters">
              {Value.Name}
              <img
                className="row__poster row__posterLarge"
                src={Value.Image} style={{width:'300px',height:'300px'}}
                alt=""
                onClick={() => {
                  handleSingleView(Value.u_id);
                }}
              />
             
           
              <div>
                <Button className="btn btn-danger" onClick={() => handleSingleView(Value.u_id)}>
                  View
                </Button>
                <Button className="btn btn-danger" onClick={() => handleDelete(Value.u_id)}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal onClose={handleClose} open={open}>
        <Delete setData={setData} data={data} setOpen={setOpen} selectedUser={selectedUser} />
      </Modal>

      <Modal onClose={handleClose} open={open2}>
        <SingleView data={data} selectedUser={selectedUser} />
      </Modal>
    </div>
  );
}
