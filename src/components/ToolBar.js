import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { changeDesk } from '../redux/actions';

function ToolBar() {
  const dispatch = useDispatch()
  const handleClick = (name) => {

    dispatch(changeDesk(name))


  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">TableTrainer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleClick("DATA")}>Data</Nav.Link>
            <Nav.Link onClick={() => handleClick("EXPLORE")}>Explore</Nav.Link>
            <Nav.Link onClick={() => handleClick("TRAIN")}>Train</Nav.Link>
            <Nav.Link onClick={() => handleClick("EVALUATE")}>Evaluate</Nav.Link>
            <Nav.Link onClick={() => handleClick("PREDICT")}>Predict</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ToolBar;