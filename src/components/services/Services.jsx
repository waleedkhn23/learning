import { useState } from 'react';
import React from 'react'
import "./style.css";
import { Col, Row } from 'react-bootstrap';
import testimonial1 from "../../assets/testimonial1.jpg"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Services = () => {
  const [size, setSize] = useState('small');

  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div id='services' className='pt-5 overflow-hidden text-light'>
      <div className='pt-5'>
        <h1 className='text-center'>Our Team is At Your Service</h1>
        <p className='text-center'>We have a team of professionals who are experts in their respective fields, including
          publishers, marketers, proofreaders, editors, ghostwriters, designers, illustrators, and
          narrators. Utilizing their skills, we can finalize and publish your book in print, eBook, and
          audiobook formats, all under your name.</p>
      </div>
      <div className='container w-75'>

        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Amazon Publishing">
            <div className=''>
              <Row className='container justify-content-evenly'>
                <Col lg={4}>
                  {/* image */}
                  <div className='ps-5 ms-5 mt-5'>
                    <img src={testimonial1} alt="testimonial" id='testimonial1' className='rounded-circle' />
                  </div>
                </Col>

                <Col lg={6}>
                  <p className='mt-5 '>Amazon Publishing Company is a book-writing service provider that provides an end-to-end solution for all your book-writing needs. We are a team of professional writers, editors, and proofreaders who work with you to turn your book idea into an accomplished manuscript. We’re here to provide guidance and expertise from start to finish, so you can focus on the things that matter most—your writing and your story. We’re dedicated to guiding you through the process of publishing, so that you may enjoy success in all your endeavors. You can trust us to provide one-on-one service and expert advice in an atmosphere conducive to learning and creativity.</p>
                  <div className='text-center mb-5'>
                    <button type="button" className="btn btn-warning px-4 py-2 mx-1">Start Project</button>
                    <button type="button" className="btn btn-secondary px-4 py-2 mx-1">Call Now</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Book Publishing Service">
            <div className=''>
              <Row className='container justify-content-evenly'>
                <Col lg={4}>
                  {/* image */}
                  <div className='ps-5 ms-5 mt-5'>
                    <img src={testimonial1} alt="testimonial" id='testimonial1' className='rounded-circle' />
                  </div>
                </Col>

                <Col lg={6}>
                  <p className='mt-5 '>Amazon Publishing Company is a book-writing service provider that provides an end-to-end solution for all your book-writing needs. We are a team of professional writers, editors, and proofreaders who work with you to turn your book idea into an accomplished manuscript. We’re here to provide guidance and expertise from start to finish, so you can focus on the things that matter most—your writing and your story. We’re dedicated to guiding you through the process of publishing, so that you may enjoy success in all your endeavors. You can trust us to provide one-on-one service and expert advice in an atmosphere conducive to learning and creativity.</p>
                  <div className='text-center mb-5'>
                    <button type="button" className="btn btn-warning px-4 py-2 mx-1">Start Project</button>
                    <button type="button" className="btn btn-secondary px-4 py-2 mx-1">Call Now</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="Book Marketing Service" title="Book Marketing Service">
            <div className=''>
              <Row className='container justify-content-evenly'>
                <Col lg={4}>
                  {/* image */}
                  <div className='ps-5 ms-5 mt-5'>
                    <img src={testimonial1} alt="testimonial" id='testimonial1' className='rounded-circle' />
                  </div>
                </Col>

                <Col lg={6}>
                  <p className='mt-5 '>Amazon Publishing Company is a book-writing service provider that provides an end-to-end solution for all your book-writing needs. We are a team of professional writers, editors, and proofreaders who work with you to turn your book idea into an accomplished manuscript. We’re here to provide guidance and expertise from start to finish, so you can focus on the things that matter most—your writing and your story. We’re dedicated to guiding you through the process of publishing, so that you may enjoy success in all your endeavors. You can trust us to provide one-on-one service and expert advice in an atmosphere conducive to learning and creativity.</p>
                  <div className='text-center mb-5'>
                    <button type="button" className="btn btn-warning px-4 py-2 mx-1">Start Project</button>
                    <button type="button" className="btn btn-secondary px-4 py-2 mx-1">Call Now</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="Book Writing Service" title="Book Writing Service">
            <div className=''>
              <Row className='container justify-content-evenly'>
                <Col lg={4}>
                  {/* image */}
                  <div className='ps-5 ms-5 mt-5'>
                    <img src={testimonial1} alt="testimonial" id='testimonial1' className='rounded-circle' />
                  </div>
                </Col>

                <Col lg={6}>
                  <p className='mt-5 '>Amazon Publishing Company is a book-writing service provider that provides an end-to-end solution for all your book-writing needs. We are a team of professional writers, editors, and proofreaders who work with you to turn your book idea into an accomplished manuscript. We’re here to provide guidance and expertise from start to finish, so you can focus on the things that matter most—your writing and your story. We’re dedicated to guiding you through the process of publishing, so that you may enjoy success in all your endeavors. You can trust us to provide one-on-one service and expert advice in an atmosphere conducive to learning and creativity.</p>
                  <div className='text-center mb-5'>
                    <button type="button" className="btn btn-warning px-4 py-2 mx-1">Start Project</button>
                    <button type="button" className="btn btn-secondary px-4 py-2 mx-1">Call Now</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="Book Editing Service" title="Book Editing Service">
            <div className=''>
              <Row className='container justify-content-evenly'>
                <Col lg={4}>
                  {/* image */}
                  <div className='ps-5 ms-5 mt-5'>
                    <img src={testimonial1} alt="testimonial" id='testimonial1' className='rounded-circle' />
                  </div>
                </Col>

                <Col lg={6}>
                  <p className='mt-5 '>Amazon Publishing Company is a book-writing service provider that provides an end-to-end solution for all your book-writing needs. We are a team of professional writers, editors, and proofreaders who work with you to turn your book idea into an accomplished manuscript. We’re here to provide guidance and expertise from start to finish, so you can focus on the things that matter most—your writing and your story. We’re dedicated to guiding you through the process of publishing, so that you may enjoy success in all your endeavors. You can trust us to provide one-on-one service and expert advice in an atmosphere conducive to learning and creativity.</p>
                  <div className='text-center mb-5'>
                    <button type="button" className="btn btn-warning px-4 py-2 mx-1">Start Project</button>
                    <button type="button" className="btn btn-secondary px-4 py-2 mx-1">Call Now</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Tab>
        </Tabs>
        {/* <div>
          <Tabs
            defaultActiveKey="1"
            type="card"
            size={size}
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Card Tab ${id}`,
                key: id,
                children: `Content of card tab ${id}`,
              };
            })}
          />
        </div> */}
      </div>
    </div>
  )
}

export default Services