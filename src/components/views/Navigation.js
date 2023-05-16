import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return(
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-3 mb-3 rounded">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Waiter App</Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
      </Container>    
    </Navbar>
  )
};

export default Navigation;