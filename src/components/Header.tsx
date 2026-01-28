import { useState } from 'react';
import { Button, Container, Image, Nav, Navbar, Offcanvas, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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
          <Offcanvas show={showMenu} onHide={handleClose} className='p-3'>
            <Offcanvas.Header closeButton style={{ alignItems: 'flex-start' }}>
              <Stack>
                <Image
                  style={{ maxWidth: '8rem' }}
                  roundedCircle
                  src='https://cdn.discordapp.com/attachments/652386576839475219/1463575869636477143/067a9be78604a82983c7c405f0c9e109.jpg?ex=697254bf&is=6971033f&hm=821cca2ebe2200a5d2edad867b0d9a75a5f10acb473f40ba78700e09e47b379a&'
                />
                <Offcanvas.Title>ana.web.ma@gmail.com</Offcanvas.Title>
              </Stack>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav activeKey='/' variant='string'>
                <Nav.Item>
                  <NavLink className={({ isActive }) => `${isActive ? 'text-dark' : 'text-primary'}`} to='/'>
                    Home
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className={({ isActive }) => `${isActive ? 'text-dark' : 'text-primary'}`} to='/about'>
                    About
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
