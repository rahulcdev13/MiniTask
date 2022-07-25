import React from 'react'
import { Link } from 'react-router-dom'

const NetflixLogo = () => {
    return (
        <>
            <div className='container-fluid'> 
                <div className='backimagesss d-flex justify-content-between'>
                    <div style={{fontSize:"50px",fontWeight:"bold",color: "red",textDecoration: "none"}}  > 
                    <Link className='logo' to='/'>
                        Netflix
                    </Link>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default NetflixLogo