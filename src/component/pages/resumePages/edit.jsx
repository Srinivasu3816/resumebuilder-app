import { Routes, Route } from 'react-router-dom';
import '../resumePages/resumecss/resumeheadercss/header.css';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router";
export function ResumeEdit(){
    const navigate = useNavigate();
    const params = useParams();
    const [updatedetails, setUpdateDetails] = useState([
        { 
           id: 0,
            UserName: '',
            Email: '',
            Designation: '',
            profilesummery: '',
            CompanyName: '',
            UserRoll: '',
            RelaventExperience: '',
            YearsOfExperience: '',
            ProjectDetails: '',
            Technicalskills:'',
            Ssc:'',
            Sscyearofpassing:0,
            Inter:'',
            Interyearofpassing:0,
            Degree:'',
            Degreeyearofpassing:0,
         }
    ]);
    const formik = useFormik({
        initialValues: {
            id: updatedetails[0].id,
            UserName: updatedetails[0].UserName,
            Email: updatedetails[0].Email,
            Designation: updatedetails[0].Designation,
            profilesummery: updatedetails[0].profilesummery,
            CompanyName: updatedetails[0].CompanyName,
            UserRoll: updatedetails[0].UserRoll,
            RelaventExperience: updatedetails[0].RelaventExperience,
            YearsOfExperience:updatedetails[0].YearsOfExperience,
            ProjectDetails: updatedetails[0].ProjectDetails,
            Technicalskills:updatedetails[0].Technicalskills,
            Ssc:updatedetails[0].Ssc,
            Sscyearofpassing:updatedetails[0].Sscyearofpassing,
            Inter:updatedetails[0].Inter,
            Interyearofpassing:updatedetails[0].Interyearofpassing,
            Degree:updatedetails[0].Degree,
            Degreeyearofpassing:updatedetails[0].Degreeyearofpassing,
           

        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
            axios({
                method: 'put',
                url: `http://127.0.0.1:5080/updatedata/${params.id}`,
                data: values
            })
            alert("Record Updated success");
            navigate('/userlists');
        },
        enableReinitialize:true

    });
    
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://127.0.0.1:5080/getalldata/${params.id}`,
            
        }).then(response => {
            setUpdateDetails(response.data);
        })

    }, []);
    return(
        <>
         <div className='mt'>
                <div className=' text-dark p-2'>
                    <h1 className='text-center'>Resume edit Form</h1>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className="row">

                        <div className="col-md-6 col-sd-12 col-12">
                            <h2 className=' text-success text-white mt-3'>User Details</h2>
                            <div className='mt-3 p-2'>
                                <div className="mb-3">
                                    <label className="form-label">User Id</label>
                                    <input type="number" name="id" value={formik.values.id} onChange={formik.handleChange} className="form-control" placeholder="User Id" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">User Name</label>
                                    <input type="text" name="UserName" value={formik.values.UserName} onChange={formik.handleChange} className="form-control" placeholder="User Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="Email" value={formik.values.Email} onChange={formik.handleChange} className="form-control" placeholder="User Email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Current Designation</label>
                                    <input type="text" name="Designation" value={formik.values.Designation} onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Profile Summery</label>
                                    <textarea name="profilesummery" value={formik.values.profilesummery} onChange={formik.handleChange} className="form-control" rows="3"></textarea>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-6 col-sd-12 col-12">
                            <h2 className=' text-success mt-3'>Educational Details</h2>
                            <div className='mt-3 p-2'>
                                <div className="mb-3">
                                    <label className="form-label">SSC/10Th</label>
                                    <input type="text" value={formik.values.Ssc} name="Ssc" onChange={formik.handleChange} className="form-control" placeholder="SSC Board" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Year Of Passing</label>
                                    <input type="number" value={formik.values.Sscyearofpassing} name="Sscyearofpassing" onChange={formik.handleChange} className="form-control" placeholder="Ssc Yearof passing" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Intermediate</label>
                                    <input type="Text" name="Inter" value={formik.values.Inter} onChange={formik.handleChange} className="form-control" placeholder="Intermediate Board" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"> Intermediate Year of passing</label>
                                    <input type="number" value={formik.values.Interyearofpassing} name="Interyearofpassing" onChange={formik.handleChange} className="form-control" placeholder="Intermediate Year of passing" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Degree</label>
                                    <input type="Text" value={formik.values.Degree} name="Degree" onChange={formik.handleChange} className="form-control" placeholder="Degree Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"> Degree Year of passing</label>
                                    <input type="number" value={formik.values.Degreeyearofpassing} name="Degreeyearofpassing" onChange={formik.handleChange} className="form-control" placeholder="Degree Year of passing" />
                                </div>


                            </div>

                        </div>


                    </div>
                    <div className="row">

                    <div className="col-md-6 col-sd-12 col-12">
                            <h2 className=' text-success mt-3 '>User Experience-1</h2>
                            <div className='mt-3 p-2'>
                                <div className="mb-3">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" value={formik.values.CompanyName} name="CompanyName" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">User Roll </label>
                                    <input type="text" value={formik.values.UserRoll} name="UserRoll" onChange={formik.handleChange} className="form-control" placeholder="User Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Relevant Experience</label>
                                    <input type="text"value={formik.values.RelaventExperience} name="RelaventExperience" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Years Of Experience</label>
                                    <input type="text" value={formik.values.YearsOfExperience} name="YearsOfExperience" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Project Details</label>
                                    <textarea value={formik.values.ProjectDetails} name="ProjectDetails" onChange={formik.handleChange} className="form-control" rows="3"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Technical Skills</label>
                                    <input type="text" value={formik.values.Technicalskills} name="Technicalskills" onChange={formik.handleChange} className="form-control" placeholder="Enter Your Skills" />
                                </div>

                            </div>
                        </div>
                        


                        {/* <div className="col-md-6 col-sd-12 col-12">
                            <h2 className=' text-success mt-3 '>User Experience-2</h2>
                            <div className='mt-3 p-2'>
                                <div className="mb-3">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" name="CompanyName" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">User Roll </label>
                                    <input type="text" name="UserRoll" onChange={formik.handleChange} className="form-control" placeholder="User Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Relevant Experience</label>
                                    <input type="text" name="RelaventExperience" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Years Of Experience</label>
                                    <input type="text" name="YearsOfExperience" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Project Details</label>
                                    <textarea name="ProjectDetails" onChange={formik.handleChange} className="form-control" rows="3"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Technical Skills</label>
                                    <input type="text" name="Technicalskills" onChange={formik.handleChange} className="form-control" placeholder="Enter Your Skills" />
                                </div>

                            </div>
                        </div> */}


                    </div>
                    {/* <div className="row">

<div className="col-md-6 col-sd-12 col-12">
        <h2 className=' text-success mt-3 '>User Experience-3</h2>
        <div className='mt-3 p-2'>
            <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input type="text" name="CompanyName" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
            </div>
            <div className="mb-3">
                <label className="form-label">User Roll </label>
                <input type="text" name="UserRoll" onChange={formik.handleChange} className="form-control" placeholder="User Name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Relevant Experience</label>
                <input type="text" name="RelaventExperience" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
            </div>
            <div className="mb-3">
                <label className="form-label">Years Of Experience</label>
                <input type="text" name="YearsOfExperience" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
            </div>

            <div className="mb-3">
                <label className="form-label">Project Details</label>
                <textarea name="ProjectDetails" onChange={formik.handleChange} className="form-control" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Technical Skills</label>
                <input type="text" name="Technicalskills" onChange={formik.handleChange} className="form-control" placeholder="Enter Your Skills" />
            </div>

        </div>
    </div>
    


    <div className="col-md-6 col-sd-12 col-12">
        <h2 className=' text-success mt-3 '>User Experience-4</h2>
        <div className='mt-3 p-2'>
            <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input type="text" name="CompanyName" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
            </div>
            <div className="mb-3">
                <label className="form-label">User Roll </label>
                <input type="text" name="UserRoll" onChange={formik.handleChange} className="form-control" placeholder="User Name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Relevant Experience</label>
                <input type="text" name="RelaventExperience" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
            </div>
            <div className="mb-3">
                <label className="form-label">Years Of Experience</label>
                <input type="text" name="YearsOfExperience" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
            </div>

            <div className="mb-3">
                <label className="form-label">Project Details</label>
                <textarea name="ProjectDetails" onChange={formik.handleChange} className="form-control" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Technical Skills</label>
                <input type="text" name="Technicalskills" onChange={formik.handleChange} className="form-control" placeholder="Enter Your Skills" />
            </div>

        </div>
    </div>


</div> */}
                    <div className=' text-center'>
                        <button type='submit' className='btn btn-primary' >Update</button>
                       
                    </div>

                </form>
            </div>
        </>
    )
}