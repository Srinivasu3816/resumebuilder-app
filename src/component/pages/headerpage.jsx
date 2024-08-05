import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import '../mystyles/headercss/header.css'

export function HeaderPage() {
    const[cookies,setCookie,removeCookie]=useCookies();
    const navigate=useNavigate();
    useEffect(()=>{
        if(cookies.Email==undefined){
            navigate('/login')
        }
    },[]);
    function handlelogoff(){
        removeCookie('Email');
        navigate('/login')
    }

    return (

        <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
            <div className="container">
                <h2 href="/" className="navbar-brand">
                    <i className="fas fa-blog"></i> &nbsp;
                    CV Builder.
                </h2>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto mt-2">
                        <li className="nav-item">
                            <a href="" className="nav-link active">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link active">
                                AboutUs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link active">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link active">
                                Templates
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link active">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-warning">
                                UserEmail: &nbsp;{cookies.Email}
                            </a>
                        </li>
                        <li className="nav-item">
                            <button className='btn btn-outline-danger text-white' onClick={handlelogoff}>Logoff</button>
                               
                        </li>
                    </ul>
                </div>



            </div>
        </nav>
    )
}