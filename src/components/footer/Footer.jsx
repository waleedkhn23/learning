import "./style.css"
import { Col, Row } from "react-bootstrap"
import ThemeButton from "../reuseable/ThemeButton"
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <>
            <section id="footer" className="">
                <div className="text-white container w-75  mt-5 pt-3">
                    <Row>
                        <Col>
                            <div className="container ms-5 mt-5">
                                <h1>What are you waiting for?</h1>
                                <p>Let’s connect and help you achieve your vision for your book.</p>
                            </div>
                        </Col>
                        <Col className="mt-5">
                            <div className="text-end mt-4 me-5">
                                <ThemeButton />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="text-white container  mt-5 pt-3">
                    <Row className="mt-5">
                        <Col lg={5} >
                            <div>
                                <img src={logo} alt="logo" width={150} height={150} />
                                <p id="footerText">Amazon Publishing Company is a trailblazer in the world of self-publishing. We help facilitate the self-publishing and marketing process on behalf of independent authors and help them sell their books as e-books, audiobooks, hardcover and paperback books worldwide.</p>
                            </div>
                        </Col>
                        <Col>
                            <h3>About Us</h3>
                            <ul className="list-unstyled">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>Testimonial</li>
                                <li>Contact Us</li>
                            </ul>
                        </Col>

                        <Col>
                            <h3>Services</h3>
                            <ul className="list-unstyled">
                                <li>Amazon Publishing</li>
                                <li>Marketing</li>
                                <li>Writing &amp; Publishing</li>
                                <li>Illustrations</li>
                                <li>Printing</li>
                                <li>Audiobook Narration</li>
                                <li>Author Website</li>
                            </ul>
                        </Col>

                        <Col>
                            <h3>Contact</h3>
                            <ul className="list-unstyled">
                                <li className="mt-4">Mailing Address: 2425 West Loop South, Houston, Texas, 77027</li>
                                <li className="mt-2">marketing@amazonpublishingcompany.com</li>
                                <li className="mt-2">+1-877-311-2129</li>
                            </ul>
                            <div className="text-center mt-5 pt-4 terms">
                                <a href="">Terms & Conditions | Privacy Policy</a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="text-center text-white">
                    <p id="copyRight">© 2022 - Amazon Publishing Company | All right reserved.</p>
                    <p>Amazon and all related Marks are Trademarks of Amazon.com, Inc. or its affiliates</p>
                </div>
            </section>
        </>
    )
}

export default Footer