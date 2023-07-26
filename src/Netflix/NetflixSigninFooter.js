import React from 'react'

const NetflixSigninFooter = () => {
    return (
        <>
            <div className='Footer'>
                <div className='container'>
                    <br />
                    <div>
                        <p>Questions? Call 000-800-040-1843</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <p>FAQ</p>
                                <p>Cookie Preferences</p>
                                <p className='input-group mt-4'>
                                    <select className='input-group-text me-4 p-1 rounded' style={{ backgroundColor: "black", color: "gray", border: "1px solid gray" }}>
                                        <option> English </option>
                                        <option> हिंदी</option>
                                    </select>
                                </p>
                            </div>
                            <div className="col-sm">
                                <p>Help Centre</p>
                                <p>Corporate Information</p>
                            </div>
                            <div className="col-sm">
                                <p>Terms of Use</p>
                            </div>
                            <div className="col-sm">
                                <p>Privacy</p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default NetflixSigninFooter