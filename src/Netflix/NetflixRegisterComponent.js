import React from 'react'

const NetflixRegisterComponent = () => {
    return (
        <>
            <div> 
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4><br/>
                <div className='input-group input-group-lg ' style={{width:"100%"}}>
                    <input type="email" placeholder='Your mail address' className='form-control p-3' />
                    <button className='btn btn-danger' style={{backgroundColor:"red"}} >
                        Get Started
                        <span className='bi bi-vhevron-right'></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NetflixRegisterComponent