import { useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => {
    setShowMenu(true);
  };
  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <Navbar className='bg-body-tertiary mb-3'>
      <Container fluid>
        <Button color='primary' onClick={handleShow}>
          <span className='navbar-toggler-icon' />
        </Button>
        <Navbar.Offcanvas>
          <Offcanvas show={showMenu} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='#'>Home</Nav.Link>
                <Nav.Link href='#'>About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
