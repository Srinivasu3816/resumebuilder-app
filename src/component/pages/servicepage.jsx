import '../mystyles/servicecss/service.css'

export function ServicePage() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 col-sd-12 col-12">
                    <div className="main-card mt-3">
                        <div className="card">
                            <div className="card-body d-flex">
                                <div>
                                    <img src='https://geeko.netlify.app/img/icons/d1.png' height='80' width='80' />
                                </div>
                                <div className="mx-3">
                                    <h5 className="card-title"><span className="mx-3">Easy Online Resume Builder</span></h5>
                                    <p className="card-text mx-3">100% free resume builder to make, save and print a professional resume in minutes. Make applying faster and easier by connecting to millions of jobs today.</p>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="main-card mt-4">
                        <div className="card ">
                            <div className="card-body d-flex">
                                <div>
                                    <img src='https://geeko.netlify.app/img/icons/d2.png' height='80' width='80' />
                                </div>
                                <div className="mx-4">
                                    <h5 className="card-title"><span className="mx-3">Step By Step Expert Tips</span></h5>
                                    <p className="card-text mx-3">Learn helpful resume tips and resume strategies in this free lesson to ensure your resume stands out from the pack.</p>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="main-card mt-4">
                        <div className="card">

                            <div className="card-body d-flex">
                                <div>
                                    <img src='https://geeko.netlify.app/img/icons/d3.png' height='80' width='80' />
                                </div>
                                <div className="mx-3">
                                    <h5 className="card-title"><span className="mx-3">Recruiter Approved Phrases</span></h5>
                                    <p className="card-text mx-3">To determine if they can help you find a job, the recruiter needs to know both your past experience and your future goals. </p>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 col-sd-12 col-12">

                    <div className="maincontent">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='whychoose'>
                        <h2>Why Choose Our Platform?</h2>
                        <div className='whychoosepara'>
                            <p>The importance of having an impressive CV cannot be stressed enough because it can make or break your chances of landing an interview with a potential employer.</p>
                            <p>The importance of having an impressive CV cannot be stressed enough because it can make or break your chances of landing an interview with a potential employer.</p>
                        </div>


                    </div>
                    <div className=' whychoosebutton mx-5'>
                        <button className='btn btn-primary'>Let's Build Your CV</button>
                    </div>

                </div>
            </div>
        </div>

    )
}