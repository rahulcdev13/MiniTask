import React from 'react'
import NetflixRegisterComponent from './NetflixRegisterComponent'

const NetflixMainComponent = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: "500px", color: "white", fontWeight: "bold", textAlign: "center" }}>
                
                <div className='mt-4'>
                    <h1 style={{fontSize:"70px",fontWeight:"bold"}}>Unlimited movies, TV <br/> shows and more.</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3><br/>
                    <NetflixRegisterComponent />
                </div>
                
            </div>
        </>
    )
}

export default NetflixMainComponent