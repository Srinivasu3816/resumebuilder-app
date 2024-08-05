import { Routes, Route } from 'react-router-dom';
import '../resumePages/resumecss/resumeheadercss/header.css';

import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
// import { response } from 'express';

export function ResumeHeader() {
    const formik = useFormik({
        initialValues: {
            Id: 0,
            UserName: '',
            Email: '',
            Designation: '',
            profilesummary: '',
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

        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            axios({
                method: 'post',
                url: 'http://127.0.0.1:5080/userresume',
                data: values
            })
            alert("Record saved success");
        }

    });
    return (
        <>
      
        <div className='mt'>
                <div className=' text-dark p-2'>
                    <h1 className='text-center'>Resume Bulding Form</h1>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className="row">

                        <div className="col-md-6 col-sd-12 col-12">
                            <h2 className=' text-success text-white mt-3'>User Details</h2>
                            <div className='mt-3 p-2'>
                                <div className="mb-3">
                                    <label className="form-label">User Id</label>
                                    <input type="number" name="Id" onChange={formik.handleChange} className="form-control" placeholder="User Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">User Name</label>
                                    <input type="text" name="UserName" onChange={formik.handleChange} className="form-control" placeholder="User Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="Email" onChange={formik.handleChange} className="form-control" placeholder="User Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Current Designation</label>
                                    <input type="text" name="Designation" onChange={formik.handleChange} className="form-control" placeholder="Current Designation" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Profile Summery</label>
                                    <textarea name="profilesummery" onChange={formik.handleChange} className="form-control" rows="3"></textarea>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-6 col-sd-12 col-12">
                            <h2 className=' text-success mt-3'>Educational Details</h2>
                            <div className='mt-3 p-2'>
                                <div className="mb-3">
                                    <label className="form-label">SSC/10Th</label>
                                    <input type="text" name="Ssc" onChange={formik.handleChange} className="form-control" placeholder="SSC" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Year Of Passing</label>
                                    <input type="number" name="Sscyearofpassing" onChange={formik.handleChange} className="form-control" placeholder="Ssc Yearof passing" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Intermediate</label>
                                    <input type="Text" name="Inter" onChange={formik.handleChange} className="form-control" placeholder="Intermediate" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"> Intermediate Year of passing</label>
                                    <input type="number" name="Interyearofpassing" onChange={formik.handleChange} className="form-control" placeholder="Intermediate Year of passing" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Degree</label>
                                    <input type="Text" name="Degree" onChange={formik.handleChange} className="form-control" placeholder="Degree Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"> Degree Year of passing</label>
                                    <input type="number" name="Degreeyearofpassing" onChange={formik.handleChange} className="form-control" placeholder="Degree Year of passing" />
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
                    <div className='d-grid gap-2 d-md-flex justify-content-md-end text-center'>
                        <button type='submit' className='btn btn-primary' >Save</button>
                        <button type='submit' className='btn btn-warning '><Link to="/viewresume" className='text-white text-decoration-none '>View Resume</Link></button>
                    </div>

                </form>
            </div>
      
            




        </>


    )
}