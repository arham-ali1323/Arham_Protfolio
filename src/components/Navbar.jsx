import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (    
    <Navbar expand="lg" className="mb-5 p-4">
      <Container fluid>
        <Navbar.Brand href="/home" className='Navlink'>H  M</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="">
            <Nav.Link className='Navlink' href="/home">Home</Nav.Link>
            <Nav.Link  className='Navlink' href="/about">About</Nav.Link>
            <Nav.Link  className='Navlink' href="/services">Services</Nav.Link>
            <Nav.Link  className='Navlink' href="/protfolio">Protfolio</Nav.Link>
            <Nav.Link  className='Navlink' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;