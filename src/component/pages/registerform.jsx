
import {  Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useEffect,useState } from 'react';
import axios,{ Axios } from 'axios';
import { useNavigate } from 'react-router-dom';

import '../mystyles/registerstyle/register.css';
export function RegisterForm() {
  const [register,setRegister]=useState([]);
  const navigate=useNavigate();
const formik=useFormik({
  initialValues:{
    UserName:'',
    Email:'',
    Password:''
  },
  onSubmit:(values)=>{
    alert(JSON.stringify(values));
    axios({
      method :'post',
      url:'http://127.0.0.1:5080/registeruser',
      data:values
    })
    alert("Register success");
navigate('/login');
  }
});
  return (

    <div className="parent">
      <div className="wrapper">
        <h2>Registration</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Enter your name" value={formik.values.UserName} name="UserName" required onChange={formik.handleChange} />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password" name="Password" value={formik.values.Password} required onChange={formik.handleChange} />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Enter Mobile Number" value={formik.values.Mobile} name="Mobile" required onChange={formik.handleChange}/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" name="Email" value={formik.values.Email} required onChange={formik.handleChange} />
          </div>
         
          <div className="input-box button">
            <button className='btn btn-primary mt-3'>Register</button>
          </div>
          <div className="text">
            <h3>Already have an account? <Link to='/login'>Login now</Link></h3>
          </div>
        </form>
      </div>
    </div>




  )

}