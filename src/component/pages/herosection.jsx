import { Link } from 'react-router-dom'

import'../mystyles/herosectioncss/hero.css'

export function Heroections(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sd-12 col-12">
                    <div className="hero-section-main">
                        <div className="heroparagraph">
                            
                            <p><span className="bi bi-currency-dollar mx-2"></span>Discover The Easiest ways to Build Your CV!</p>
                          
                           
                        </div>
                        <div className="herotext">
                            <h1>Online CV Builder With Creative Templates.</h1>
                        </div>
                        <div className="herodetail">
                            <p className='mx-2'>
                            Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.
                            </p>
                        </div>
                        <div>
                            <button className='btn btn-primary mx-5 p-2 m-3'><Link to='/mainresume' className='text-white text-decoration-none'>Create Resume</Link></button>
                            <button  className='btn btn-primary p-2 m-3'>Contact Us</button>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 col-sd-12 col-12">
                    <div className="mt-5">
                    <img src="https://geeko.netlify.app/img/core-img/banner2.png" className='mt-5' height='550' width='620'/>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}