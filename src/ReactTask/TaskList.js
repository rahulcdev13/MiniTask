import React from 'react'
import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const TaskList = () => {
    const [count, setCount] = useState(0)
    const list = ['Mehrangarh Fort', 'Gwalior Fort', 'Golconda Fort', 'Jaisalmer Fort'];

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {

        if (event.target.value === "") {
            setFilterList(list);
            return;
        }
        const filteredValues = list.filter(
            (item) =>
                item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setFilterList(filteredValues);
    };
    return (
        <>
            <div className='container'>
                <p><b>1. Build Search filter in React</b></p>
                <div className="main">
                    <div>
                        Search: <input type="text" className='form-control' onChange={handleSearch} />
                    </div>
                    {filterList &&
                        filterList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </div>
                <hr />
                <p><b>2. Simple counter exercise</b></p>
                <div className='coubter'>
                    <button type="button" onClick={() => { setCount(count + 1) }} className='btn btn-success'> Increment </button>
                    <h2>&nbsp;&nbsp; {count} &nbsp;&nbsp;</h2>
                    <button type="button" onClick={() => { setCount(count - 1) }} className='btn btn-danger'> Decrement </button>
                </div>
                <hr />
                <p><b>3. Display a list in React</b></p>
                <div>
                    {filterList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </div>
                <hr />
                <p><b>4. Build Accordion in React</b></p>
                <div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Accordion Item #3</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <hr />
                <p><b>5. Image Slider using React JS</b></p>
                <div>
                    <Carousel>
                        <Carousel.Item> 
                            <img src="./images/netflixback.jpg" alt="imagenumber-1" srcset="" width='100%' height='300px' />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="./images/netflix2.jpg" alt="imagenumber-2" srcset="" width='100%' height='300px' />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="./images/netflixback.jpg" alt="imagenumber-3" srcset="" width='100%' height='300px' />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <hr />
                <p><b>6. Create a Checklist in React</b></p>
                <div>
                    <input type="checkbox" name="javascript" id="javascript" /> javascript  <br/>
                    <input type="checkbox" name="Reactjs" id="Reactjs" /> Reactjs<br/>
                    <input type="checkbox" name="Html" id="Html" /> Html<br/>
                    <input type="checkbox" name="CSS" id="CSS" /> CSS<br/>
                    <input type="checkbox" name="NativeReact" id="NativeReact" /> NativeReact<br/>
                    <input type="checkbox" name="Nodejs" id="Nodejs" /> Nodejs<br/>
                    <p>Checked Result : {} </p>
                </div>
            </div>
        </>
    )
}

export default TaskList
