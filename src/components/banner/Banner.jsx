import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ThemeButton from "../reuseable/ThemeButton";
import trusted from "../../assets/trusted.png"


const Banner = () => {
    return (
        <div id='banners'>
            <Container>
                <Row>
                    <Col className='mt-5 pt-2'>
                        <h1 id="head">Streamlined Self-Publishing on Amazon</h1>
                        <p className='pb-1 text-light' id="text1">
                            We make self-publishing on Amazon easy for independent authors. Amazon Author
                            Solutions is a top facilitator and marketer for self-published books. We assist authors like you
                            throughout the entire process, from book creation to online selling. What's more, you keep
                            100% of your net royalties with our services. Get in touch with us to find out how we can
                            assist you.

                        </p>

                        <ThemeButton />
                        <button type="button" id="btn2" className="btn text-light px-4 ms-3 opacity-75" >CALL NOW</button>
                       <div className="img pt-4">
                        <img src={trusted} alt="" />
                       </div>
                    </Col>


                    <Col className=' pt-5'>

                        {/* Filling Form  */}
                        <Form className='container w-50 px-4 opacity-75' id='form'>
                            <div>
                                <h2 className='text-center text-dark py-4'>Launch Your Book</h2>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="text-light input" type="email" placeholder="Name" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="input" type="password" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Control className="input" type="email" placeholder="Phone - keep your mail empty :)" />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                {/* <Form.Label>Example textarea</Form.Label> */}
                                <Form.Control className="input" as="textarea" placeholder="I am looking for..." rows={4} />
                            </Form.Group>
                            <Button style={{backgroundColor: "#404040", fontWeight: "600"}} type="submit" className="mb-4 w-100">
                                Start Now !
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner