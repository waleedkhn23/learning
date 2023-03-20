import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import book from "../../assets/book.png"

const StartProject = () => {
    return (
        <div>
            <Container className='overflow-hidden'>
                <Row className='justify-content-evenly mt-3'>

                    <Col className='mt-5 pt-5 ps-2' lg={6}>
                        <img src={book} alt="" />
                    </Col>

                    <Col className="mt-5 pt-5" lg={5}>
                        <h2 className='mt-3'>
                            Self-Publishing Made Easy</h2>
                        <p className='pt-3'>At Amazon Author Solutions, we offer self-publishing solutions that are both convenient and
                            affordable. Whether you're just starting out as a writer or looking to gain more recognition, we
                            have a range of services that can help you achieve your goals. We can assist you with every
                            step of the book creation process, including writing, editing, proofreading, design, illustration,
                            formatting, publishing, and marketing. Our aim is to bring your book to life exactly as you
                            envision it. Additionally, you'll maintain full ownership and copyrights over your book when
                            using our services.
                        </p>

                        <button type="button" className="btn btn-warning px-5 py-2">Start Project</button>
                    </Col>


                </Row>
            </Container>
        </div>
    )
}

export default StartProject