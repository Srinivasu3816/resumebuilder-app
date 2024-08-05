import '../mystyles/jumbocss/jumbo.css'

export function Jumbotran() {
    return (
        <div className="container">
            <div className='jumboimg'>
                <img src='https://geeko.netlify.app/img/core-img/custom.png ' height='150' width='250' />
            </div>
            <div className="p-4 shadow p-5 mb-5 bg-body-tertiary rounded d-flex justify-content-between" style={{ backgroundcolor: 'hsl(0, 0%, 94%)' }}>


                <div className="jumbo d-flex align-items-center justify-content-center ">
                    <h5>Do you Need a Complete Custom CV Template?</h5>
                </div>
                <div>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary .btn-lg mt-3">
                        Send a Request
                    </button>
                </div>




            </div>

        </div>
    )
}