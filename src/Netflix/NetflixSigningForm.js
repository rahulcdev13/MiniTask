import React from 'react'

const NetflixSigningForm = () => {
    return (
        <> 
            <div className='margintop'>
                <div className='Signform'>
                        <h2 style={{ fontWeight: "bold" }}> Sign In</h2><br />
                    <form>
                        <div>
                            <input className='w-100 p-3' type="text" placeholder='Email or phone number' /><br />
                            <input className='w-100 mt-2 p-3' type="password" placeholder='Password' /><br /><br />
                            <button className='w-100 mt-2 p-3' style={{ backgroundColor: "red", color: "white", fontWeight: "bold" }}>Sign in</button>
                        </div>

                        <div className="row mb-4 text-secondary">
                            <div className="col d-flex justify-content-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                    <label className="form-check-label" for="form2Example31"> Remember me </label>
                                </div>
                            </div>
                            <div className="col">
                                <p>Need help?</p>
                            </div>
                        </div><br />
                        <div className=' text-secondary'>
                            <p>New to Netflix? <span style={{ color: "white" }}>Sign up now.</span></p>
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span style={{ color: "blue" }}> Learn more.</span></p>
                        </div><br/><br/>
                    </form>
                </div> 
            </div>
            <div className='margintopsss'>
            <br/><br/><br/><br/><br/> 
            </div>
            
        </>
    )
}

export default NetflixSigningForm