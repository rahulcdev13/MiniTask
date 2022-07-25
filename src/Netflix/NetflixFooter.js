import React from 'react'

const NetflixFooter = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <br /><br />
                    <div>
                        <p>Questions? Call 000-800-040-1843</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <p>FAQ</p>
                                <p>Investor Relations</p>
                                <p>Privacy</p>
                                <p>Speed Test</p> 
                                    <p className='input-group mt-4'> 
                                        <select className='input-group-text me-4 p-1 rounded' style={{ backgroundColor: "black", color: "white", border: "1px solid white" }}>
                                            <option> English </option>
                                            <option> हिंदी</option>
                                        </select>
                                    </p> 
                                <p>Netflix India</p>
                            </div>
                            <div className="col-sm">
                                <p>Help Centre</p>
                                <p>Jobs</p>
                                <p>Cookie Preferences</p>
                                <p>Legal Notices</p>
                            </div>
                            <div className="col-sm">
                                <p>Account</p>
                                <p>Ways to Watch</p>
                                <p>Corporate Information</p>
                                <p>Only on Netflix</p>
                            </div>
                            <div className="col-sm">
                                <p>Media Centre</p>
                                <p>Terms of Use</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NetflixFooter