import React from 'react'
import { Link } from 'react-router-dom'

const NetflixHeaderComponent = () => {
    return (
        <>
            <div className='container-fluid'> 
                <div className='backimage d-flex justify-content-between'>
                <div style={{fontSize:"50px",fontWeight:"bold",color: "red",textDecoration: "none"}}  > 
                    <Link className='logo' to='/'>
                        Netflix
                    </Link>
                    </div>
                    <div>
                    <div className='input-group mt-4'>
                        <select className='input-group-text me-4 p-1 rounded' style={{backgroundColor:"black",color:"white",border:"1px solid white"}}>  
                            <option>English</option>
                            <option>हिंदी</option>
                        </select>
                        <Link to='/NetflixSigninPage'>
                        <button style={{backgroundColor:"red"}} className='btn btn-danger rounded'>Sign in</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NetflixHeaderComponent