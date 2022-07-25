import React from 'react'
import './Netflix.css'
import NetflixRegisterComponent from './NetflixRegisterComponent'

const NetflixHomeSection6 = () => {
    return (
        <>
            <div className='containerss'>
                <div className='d-flex justify-content-center align-items-center text-white '>
                    <h1 className='freaskquestion' style={{ fontSize: "50px", fontWeight: "bold" }} >Frequently Asked Questions</h1>
                </div>
                <div className='d-flex justify-content-center align-items-center text-white freaskquestion' style={{ color: "white" }} >
                    <div className="accordion accordion-flush " id="accordionFlushExample" style={{ width: "41%", backgroundColor: "black" }}>
                        <div className="accordion-item newone">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What is Netflix ?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Netflix is a streaming service that offers a wide variety of <br /> award-winning TV shows, movies, anime, documentaries and <br />  more – on thousands of internet-connected devices.<br /> <br />
                                    You can watch as much as you want, <br />whenever you want, without a single ad – all for one low monthly price. <br />There's always something new to discover, and new TV shows and<br /> movies are added every week!</div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingtwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapsetwo">
                                    How much does Netflix cost ?
                                </button>
                            </h2>
                            <div id="flush-collapsetwo" className="accordion-collapse collapse" aria-labelledby="flush-headingtwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Netflix is flexible. There are no annoying contracts and no <br /> commitments. You can easily cancel your account online in two <br /> clicks. There are no cancellation fees – start or stop your <br /> account anytime.</div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingthree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethree" aria-expanded="false" aria-controls="flush-collapsethree">
                                    Where can I watch ?
                                </button>
                            </h2>
                            <div id="flush-collapsethree" className="accordion-collapse collapse" aria-labelledby="flush-headingthree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Watch anywhere, anytime. Sign in with your Netflix account to <br />watch instantly on the web at netflix.com from your personal<br /> computer or on any internet-connected device that offers the <br />Netflix app, including smart TVs, smartphones, tablets,<br /> streaming media players and game consoles.<br /><br />

                                    You can also download your favourite shows with the iOS, <br />Android, or Windows 10 app. Use downloads to watch while<br /> you're on the go and without an internet connection. Take <br />Netflix with you anywhere.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingfour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                    How do I cancel ?
                                </button>
                            </h2>
                            <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Netflix has an extensive library of feature films, documentaries,<br /> TV shows, anime, award-winning Netflix originals, and more. <br />Watch as much as you want, anytime you want.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingfive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                                    What can I watch on Netflix ?
                                </button>
                            </h2>
                            <div id="flush-collapsefive" className="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Netflix has an extensive library of feature films, documentaries,<br /> TV shows, anime, award-winning Netflix originals, and more. <br />Watch as much as you want, anytime you want.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingsix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
                                    Is Netflix good for kids ?
                                </button>
                            </h2>
                            <div id="flush-collapsesix" className="accordion-collapse collapse" aria-labelledby="flush-headingsix" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">The Netflix Kids experience is included in your membership to<br /> give parents control while kids enjoy family-friendly TV shows <br />and films in their own space.<br /><br />

                                    Kids profiles come with PIN-protected parental controls that let<br /> you restrict the maturity rating of content kids can watch and <br />block specific titles you don’t want kids to see.</div>
                            </div>
                            <div className='freaskquestionc' style={{ backgroundColor: "black" }}>
                                <div>
                                 <br /> <br /> 
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center text-white' style={{ backgroundColor: "black" }}>
                            
                                <NetflixRegisterComponent /> 
                            </div>
                            <div className='freaskquestion'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NetflixHomeSection6