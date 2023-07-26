import React from 'react'
import './Netflix.css'
import NetflixMainComponent from './NetflixMainComponent'
import NetflixHeaderComponent from './NetflixHeaderComponent'
import NetflixHomeSection2 from './NetflixHomeSection2'
import NetflixHomeSection3 from './NetflixHomeSection3'
import NetflixHomeSection4 from './NetflixHomeSection4'
import NetflixHomeSection5 from './NetflixHomeSection5'
import NetflixHomeSection6 from './NetflixHomeSection6'
import NetflixFooter from './NetflixFooter'

let sectionCss = {
border: "4px solid rgb(76, 72, 72)", 
marginTop: "0px" 
}

const NetflixIndexComponent = () => {
    return (
        <>
            <div className='backimage'>
                <div>
                    <NetflixHeaderComponent />
                    <br></br>
                </div>
                <div className='backColor'>
                    <NetflixMainComponent />
                </div>
            </div>
            <hr style={sectionCss}></hr>
            <NetflixHomeSection2 />
            <hr style={sectionCss}></hr>
            <NetflixHomeSection3 />
            <hr style={sectionCss}></hr>
            <NetflixHomeSection4 />
            <hr style={sectionCss}></hr>
            <NetflixHomeSection5 />
            <hr style={sectionCss}></hr>
            <NetflixHomeSection6 />
            <hr style={sectionCss}></hr>
            <NetflixFooter />
        </>
    )
}

export default NetflixIndexComponent