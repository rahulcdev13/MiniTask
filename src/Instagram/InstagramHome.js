import React from 'react'
import { Link } from 'react-router-dom'
import './Instagram.css'
import InstagramFooter from './InstagramFooter'

const InstagramHome = () => {
    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center mt-4'>
                    <div>
                        <img src="images/instgram4webp.webp" alt="loginimage" />
                    </div> <br />
                    <div className='loginForm'>
                        <div className='logo'>
                            <img className='mb-4' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="Logo" />
                        </div>
                        <input className='inputtag' type="text" placeholder="Phone number, username, or email" /><br />
                        <input className='inputtag mt-2' type="password" placeholder="password" /><br />
                        <button className="btn btn-primary mt-4 w-100">Log In</button>
                        <div className='d-flex justify-content-center align-items-center mt-4'>
                            <hr className='hrtag'></hr>
                            &nbsp;<span> OR </span>&nbsp;
                            <hr className='hrtag'></hr>
                        </div>
                        <div className='facebook mt-4'>
                            <span className="bi bi-facebook"> Log in with Facebook </span>
                        </div>
                        <div>
                            <p className='password mt-2'>Forget Password?</p>
                        </div>
                        <div>
                            <div className='signupage mt-4'>
                                <span> Don't have an account? <Link to="/" className='signup'>Sign up</Link> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gettheapp'>
                    Get the app.<br />
                    <div className='d-flex justify-content-center align-items-center mt-4'>
                        <img className='apk' src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="appstore" />
                        <img className='apk' src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="appstore" />
                    </div>
                </div>
            </div>
            <InstagramFooter />
        </>
    )
}

export default InstagramHome