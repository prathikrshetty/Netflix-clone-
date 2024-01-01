import React, { useState } from 'react';

const Reg = () => {
  let initialValue;
  if (localStorage.getItem('Shettyy') == null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem('Shettyy')) || [];
  }
  
  const [value, setValue] = useState(initialValue);
  const [Register, setRegister] = useState({});

  const handleChange = (e) => {
    setRegister({
      ...Register,
      [e.target.name]: e.target.value,
    });
    console.log(Register)
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
          
    const UserId = value.length === 0 ? 1 : value[value.length - 1].u_id + 1;
    const details = {
      u_id: UserId,
      ...Register,
    };
    const updatedValue = [...value, details];
    setValue(updatedValue);
    localStorage.setItem('Shettyy', JSON.stringify(updatedValue));
  };

  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white"> Sign Up</h1>
        <br />
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
          <input
            className="form-control"
            type="tel"
            placeholder="Contact"
            name="contact"
            onChange={handleChange}
          />
          <input
            className="form-control"
            type="email"
            placeholder="Email Address"
            name="Email"
            onChange={handleChange}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="Password"
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            className="btn btn-danger btn-block"
          >
            Sign Up
          </button>
          <br />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              name="checkbox"
            />
            <label
              className="form-check-label text-white"
              htmlFor="flexCheckDefault"
            >
              Remember Me
            </label>
          </div>
        </form>
        <br />
        <br />
        <div className="login-form-other">
          <div className="login-signup-now">
          
            <a className="" target="_self" href="/Login">
              Sign in now
            </a>
          </div>
        </div>
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
