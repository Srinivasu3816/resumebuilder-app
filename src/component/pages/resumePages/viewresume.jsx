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
        profilesummary: '',
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
        .then((response) => {
            SetDetails(response.data);
            // console.log(details);
        })
    }, []);

    return (
        <div>
            <div className="container">
                <div className="resume-header text-center">


                    <h1>{details.UserName}</h1>
                    <p>Hyderabad, Currently in Bangalore |{details.Degree}  in [Specialization] | 4.6 years of experience in UI with Angular</p>
                </div>

                <div className="resume-section">
                    <h2>Contact Information</h2>
                    <ul key={details.Id}>
                        <li>Email: {details.Email}</li>
                        <li>Phone: [Your Phone Number]</li>
                        <li>LinkedIn: [Your LinkedIn Profile]</li>
                        <li>GitHub: [Your GitHub Profile]</li>
                    </ul>
                </div>

                <div className="resume-section">
                    <h2>Summary</h2>
                    <p>Experienced UI Developer with 4.6 years in building user-friendly and responsive web applications using Angular. Proven track record of delivering high-quality projects and improving user experience. Strong problem-solving skills and a passion for continuous learning.</p>
                </div>

                <div className="resume-section">
                    <h2>Professional Experience</h2>
                    <div>
                        <h3>UI Developer</h3>
                        <p>Central Retail Corporation's E-commerce Platform</p>
                        <p><em>[Start Date] - [End Date]</em></p>
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
                            <h3>M.Tech in [Specialization]</h3>
                            <p>[University Name], [Year]</p>
                        </li>
                        {/* <!-- Add more education entries as needed --> */}
                    </ul>
                </div>

                <div className="resume-section">
                    <h2>Skills</h2>
                    <ul>
                        <li>Angular</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Responsive Design</li>
                        <li>Version Control (Git)</li>
                        {/* <!-- Add more skills as needed --> */}
                    </ul>
                </div>

                <div className="resume-section">
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <h3>Project Title</h3>
                            <p>Description of the project, your role, and the technologies used.</p>
                        </li>
                        {/* <!-- Add more projects as needed --> */}
                    </ul>
                </div>

                <div className="resume-section">
                    <h2>Certifications</h2>
                    <ul>
                        <li>Certification Title, Issuing Organization, Year</li>
                        {/* <!-- Add more certifications as needed --> */}
                    </ul>
                </div>
            </div>
        </div>




    )

}