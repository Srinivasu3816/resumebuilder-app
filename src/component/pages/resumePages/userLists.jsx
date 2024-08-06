import axios, { Axios } from 'axios';
import { useEffect,useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function UserLists() {
    const [resumedetails,setresumedetails] = useState([{id:0}]);
   
useEffect(()=>{
    axios({
        method:'get',
        url:'http://127.0.0.1:5080/getalldata'
    })
    .then(response=>{
        setresumedetails(response.data);
        
    })
},[]);

    return(
        <div className="container">
        
            <h2 className="text-center text-danger mt-5">Welcome To Tutorial CURD Operations</h2>
            
            <table className='table table-hover mt-4'>
                <thead>
                    <tr>                     
                    <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                       resumedetails.map(detail=>
                            <tr key={detail.id}>
                              
                                  <td>{detail.id}</td>
                                <td>{detail.UserName}</td>
                                <td>{detail.Email}</td>
                                <td>
                                    <Link to={`/viewresume/${detail.id}`} className='btn btn-success ms-2 mt-3'>viewResume</Link>
                                    <Link to={`/edit/${detail.id}`} className='btn btn-warning ms-2 mt-3'>Edit</Link>
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