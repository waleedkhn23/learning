import "./style.css"
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import leading from "../../assets/leading.png"

const Leading = () => {
    return (
        <>
            <div id="leading">
                <section className='overflow-hidden'>
                    <div className='text-center container w-75'>
                        <h2 className="fw-bold">Industry-Leading Team at Your Service</h2>
                        <p className="ms-5 pt-2">We have a specialist team of publishers, marketers, proofreaders, editors, ghostwriters, designers, illustrators and narrators. We can finalize and  publish your book under your name in a print, eBook and audiobook format.</p>
                    </div>
                    <div className="container w-50 mt-5">
                        <Row >
                            <Col lg={7}>
                                <p className='mt-5 text3'>
                                    Amazon Publishing Company is a leading facilitator of self-publishing and marketing for independent authors. We help authors and their books reach their target audiences. We offer a full suite of author services including book cover design, book writing, editing, proofreading, audiobook creation, author website creation, Search Engine Optimization (SEO), and Social Media Marketing (SMM).</p>
                            </Col>
                            <Col lg={3}>
                                <div>
                                    <img src={leading} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className=' text-center mb-5'>
                        <button type="button" className="btn btn-warning px-4 py-2 mx-1">Start Project</button>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Leading