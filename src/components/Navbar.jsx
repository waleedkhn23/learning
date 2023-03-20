import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png"

function NavBar() {
  
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width={80} height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ fontSize: "1.5rem" }}>
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#about">About Us</Nav.Link>
            <NavDropdown className='text-white'
             title={
                <span className="text-white my-auto">Services</span>
                   } id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Amazon Publishing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Publishing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Editing &amp; Proofreading</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Writing &amp; Publishing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Cover Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Illustrations</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Printing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Audiobook Narration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Author Website</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link className='text-white' href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='text-white' href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link className='text-white' href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;