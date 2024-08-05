import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useEffect,useState } from 'react';
import { useCookies } from 'react-cookie';
import '../mystyles/loginstyle/login.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export function LoginForm() {
    const [cookies,setCookie,removeCookie] =useCookies();
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            Email:'',
            Password:''
        },
        onSubmit:cvuserinfo =>{
            axios({
                method:'get',
                url:'http://127.0.0.1:5080/getallusers'
            })
            .then(response =>{
                for(var user of response.data){
                    if(user.Email==cvuserinfo.Email && user.Password==cvuserinfo.Password ){
                        setCookie('Email',cvuserinfo.Email);
                        navigate('/main');
                        break;
                    }else {
                        alert("Invalid Email/Password");
                        navigate('/login');
                   
                }
                }
            })
        }
    })
    return (
        <div className='container-fluid'>
            <div className="parent">
                <div className="center ">
                    <div className="header">
                        Login Form
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" placeholder="Email or Username" name='Email' onChange={formik.handleChange} />
                        <i class="far fa-envelope"></i>
                        <input id="pswrd" type="password" placeholder="Password" name='Password' onChange={formik.handleChange} />
                        <i className="fas fa-lock" ></i>
                        <input type="submit" value="Sign in" />
                        <Link to='/register'>Not Registred?</Link>
                    </form>
                </div>
            </div>


        </div>

    )

}