import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { changeDesk } from '../redux/actions';

function ToolBar() {
  const dispatch = useDispatch()
  const deskSection = useSelector(state => state.deskSection)
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
            <Nav.Link onClick={() => handleClick("DATA")} active={deskSection === "DATA"}>Data</Nav.Link>
            <Nav.Link onClick={() => handleClick("EXPLORE")} active={deskSection === "EXPLORE"}>Explore</Nav.Link>
            <Nav.Link onClick={() => handleClick("MODEL_VIEW")} active={deskSection === "MODEL_VIEW"}>Model</Nav.Link>
            <Nav.Link onClick={() => handleClick("TRAIN")} active={deskSection === "TRAIN"}>Train</Nav.Link>
            <Nav.Link onClick={() => handleClick("EVALUATE")} active={deskSection === "EVALUATE"}>Evaluate</Nav.Link>
            <Nav.Link onClick={() => handleClick("PREDICT")} active={deskSection === "PREDICT"}>Predict</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ToolBar;