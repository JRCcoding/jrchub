import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap'

function Navigation() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>JRC Hub</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/Blogscreen'>
                <Nav.Link>Blog</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Notescreen'>
                <Nav.Link>Notes</Nav.Link>
              </LinkContainer>
              <NavDropdown title='Other' id='basic-nav-dropdown'>
                <LinkContainer to='/Widgetscreen'>
                  <NavDropdown.Item>Widgets</NavDropdown.Item>
                </LinkContainer>
                {/* <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  About JRC
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Navigation
