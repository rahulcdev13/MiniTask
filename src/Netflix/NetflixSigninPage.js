import React from 'react'
import NetflixSigninFooter from './NetflixSigninFooter'
import NetflixSigningForm from './NetflixSigningForm'

const NetflixSigninPage = () => {
  return (
    <>
    <div>
      <div className='signinFooter'>
        <div className='sigingform'>
          <NetflixSigningForm />
        </div><br/><br/>
        <div>
          <NetflixSigninFooter />
        </div>
      </div>
    </div>

    </>
  )
}

export default NetflixSigninPage