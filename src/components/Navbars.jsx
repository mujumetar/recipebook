import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function Navbars() {

  

    return (
        <Navbar expand="lg" className="bg-dark" variant='dark'>
            <Container>
                <Navbar.Brand className='h1 text-white' href="#">Recipe Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" variant='light' />
                <Navbar.Collapse id="navbarScroll" variant='light'>
                    <Nav
                        className="me-auto my-2 my-lg-0 text-white"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
                        
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;