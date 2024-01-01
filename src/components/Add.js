import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
  let initialValue;
  if (localStorage.getItem('Movies') == null) {
    initialValue = [];
  } else {
    initialValue = JSON.stringify(localStorage.getItem('Movies')) ;
  }

  const [value, setValue] = useState(initialValue);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
          
    const newUserId = value.length === 0 ? 1 : value[value.length - 1].u_id + 1;
    const details = {
      u_id: newUserId,
      ...data,
    };
    const updatedValue = [...value, details];
    setValue(updatedValue);
    localStorage.setItem('Movies', JSON.stringify(updatedValue));
    await navigate('/dashboard')
  };

  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white"> Add movies </h1>
        <br />
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            name="Name"
            onChange={handleChange}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Links"
            name="Image"
            onChange={handleChange}
          />
       
          <button
            onClick={handleSubmit}
            className="btn btn-danger btn-block"
          >
            Add 
          </button>
          <br />
          
        </form>
        <br />
        <br />
     
      </div>
      <div className="shadow"></div>
      <img
        className="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
    </div>
  );
};

export default Reg;
