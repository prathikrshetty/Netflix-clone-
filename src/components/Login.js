

import React, { useEffect, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userlog,setUserLog]=useState('')
  const [userreg,setUserReg]=useState()

  useEffect(()=>{
      setUserReg(JSON.parse(localStorage.getItem('Shettyy')))
  },[])


  const HandleChange = (e) =>{
      setUserLog({...userlog,[e.target.name]:e.target.value})
  }

  console.log(userreg)

  const HandleSubmit=async ()=>{
      // const check = userreg.filter((e)=>e.email === userlog.email && e.password === userlog.password)
      const check = userreg.filter((e)=>e.email === userlog.email && e.password === userlog.password)
      if(check.length>0){
          await localStorage.setItem('token',JSON.stringify(check[0].u_id))
          navigate('/dashboard')
      }else{
          alert('incorrect')
          await navigate('/Login')
      }
  }
  
   
  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white"> </h1>
        <br />
        <form onSubmit={HandleSubmit}>
          <input
            className="form-control"
          
            onChange={HandleChange}
            type="email"
            placeholder="Email"
            name="Email"
            />

          <input
            className="form-control"
          
            onChange={ HandleChange}
            type="password"
            placeholder="Password"
            name="Password"
            />

          <button className="btn btn-danger btn-block" >
          Sign in
          </button>
        </form>
        <br />
        <br />
         <p className="text-danger">User does not exist | Go for Signup</p>
        <div className="login-form-other">
          <div className="login-signup-now">
          &nbsp;
            <Link className=" " to="/Register">
              'Sign Up Now'
            </Link>.
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

export default Login; 
