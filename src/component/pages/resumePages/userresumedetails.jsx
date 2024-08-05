import axios, { Axios } from 'axios';
import { useEffect,useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function UserLists() {
    const [resumedetails,setresumedetails] = useState([]);
   
useEffect(()=>{
    axios({
        method:'get',
        url:'http://127.0.0.1:5080/getresumedata'
    })
    .then((response)=>{
        setresumedetails(response.data);
        
    })
},[]);

    return(
        <div className="container">
        
            <h2 className="text-center text-danger mt-5">Welcome To Tutorial CURD Operations</h2>
            
            <table className='table table-hover mt-4'>
                <thead>
                    <tr>                     
                        
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                       resumedetails.map(details=>
                            <tr key={details.id}>
                                 
                                <td>{details.UserName}</td>
                                <td>{details.Email}</td>
                                <td>
                                    <Link to={`/viewresume/${details.id}`} className='btn btn-success ms-2 mt-3'>viewResume</Link>
                                    <Link to={`/edit/${details.id}`} className='btn btn-warning ms-2 mt-3'>Edit</Link>
                                    {/* <Link to={`/delete/${video.id}`} className='btn btn-danger ms-2 mt-3'>Delete</Link> */}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
           
           
        </div>
    )
}