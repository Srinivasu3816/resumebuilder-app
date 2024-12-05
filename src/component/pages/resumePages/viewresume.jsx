import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { useParams } from 'react-router-dom';
import '../resumePages/resumecss/viewresumecss/view.css'
export function ViewResume() {
    const params = useParams();
    const [details, SetDetails] = useState([
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
        Technicalskills: '',
        Ssc: '',
        Sscyearofpassing: 0,
        Inter: '',
        Interyearofpassing: 0,
        Degree: '',
        Degreeyearofpassing: 0
    }
    ]);
   
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://127.0.0.1:5080/getalldata/${params.id}`
        })
        .then(response => {
            SetDetails(response.data);
            // console.log(details);
        })
    }, []);

    return (
        <div>
            <div className="container">
                <div>
               {/* <button className='btn btn-primary'> <Link to={`/edit/${detail.id}`} className='btn btn-warning ms-2 mt-3'>Edit</Link></button> */}
                </div>
                <div className="resume-header text-center">


                    <h1>{details[0].UserName}</h1>
                    <p>Hyderabad, Currently in Bangalore |{details[0].Degree}   | {details[0].YearsOfExperience} years of experience in UI with Angular</p>
                </div>

                <div className="resume-section">
                    <h2>Contact Information</h2>
                    <ul key={details.Id}>
                        <li>Email: {details[0].Email}</li>
                        {/* <li>Phone: [Your Phone Number]</li>
                        <li>LinkedIn: [Your LinkedIn Profile]</li>
                        <li>GitHub: [Your GitHub Profile]</li> */}
                    </ul>
                </div>

                <div className="resume-section">
                    <h2>Summary</h2>
                    <p>{details[0].profilesummery}</p>
                    
                </div>

                <div className="resume-section">
                    <h2>Professional Experience</h2>
                    <div>
                        <h3>{details[0].Designation}</h3>
                        <p>{details[0].ProjectDetails}</p>
                        <p><em>[2023] - [2024]</em></p>
                        <ul>
                            <li>Developed and maintained e-commerce platform using Angular.</li>
                            <li>Collaborated with cross-functional teams to design and implement new features.</li>
                            <li>Improved website performance and user experience through code optimization.</li>
                            <li>Participated in code reviews and provided constructive feedback to team members.</li>
                        </ul>
                    </div>
                    {/* <!-- Add more experience entries as needed --> */}
                </div>

                <div className="resume-section">
                    <h2>Education</h2>
                    <ul>
                        <li>
                            <h3>{details[0].Degree}</h3>
                            <p> {details[0].Degreeyearofpassing}</p>
                        </li>
                        {/* <!-- Add more education entries as needed --> */}
                    </ul>
                </div>

                <div className="resume-section">
                    <h2>Skills</h2>
                    <ul>
                        <li>{details[0].Technicalskills}</li>
                        
                        {/* <!-- Add more skills as needed --> */}
                    </ul>
                </div>

                <div className="resume-section">
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <h3>CRC</h3>
                            <p>{details[0].ProjectDetails}</p>
                        </li>
                        {/* <!-- Add more projects as needed --> */}
                    </ul>
                </div>

                {/* <div className="resume-section">
                    <h2>Certifications</h2>
                    <ul>
                        <li>Certification Title, Issuing Organization, Year</li>
                        
                    </ul>
                </div> */}
            </div>
        </div>




    )

}