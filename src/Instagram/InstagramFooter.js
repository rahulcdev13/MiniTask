import React from 'react'

const InstagramFooter = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center footer'>
        <div>
          <p className='footerName'>Meta
            About
            Blog
            Jobs
            Help
            API
            Privacy
            Terms
            Top Accounts
            Hashtags
            Locations
            Instagram Lite
            Contact Uploading & Non-Users</p>
          <p className='footerName'>Dance
            Food & Drink
            Home & Garden
            Music
            Visual Arts</p>
          <p className='footerName'>
            <select className='slectlang'>
              <option>English</option>
              <option>Hindi</option>
            </select>
            © Instagram Design By Rahul Chavan @ 2022</p>
        </div>
      </div>
    </>
  )
}

export default InstagramFooter