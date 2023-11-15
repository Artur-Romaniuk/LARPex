import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigation.scss";
import ButtonComp from "../buttonComp/ButtonComp.tsx";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navigation">
      <Container fluid className={"navBrand"}>
        <Navbar.Brand>Larpex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ButtonComp
          className="btn btn-light d-none d-lg-block"
          onClick={() => console.log("wyloguj")}
          text={"Wyloguj się"}
        />
      </Container>
      <Container fluid className={"navLinks"}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className={"nav-link"}>
              Home
            </Link>
            <Link to="/about" className={"nav-link"}>
              About
            </Link>
            <Link to="/panel-wydarzen" className={"nav-link"}>
              Panel wydarzeń
            </Link>
            <Link to="/temp/updateEvent/1" className={"nav-link"}>
              event 1
            </Link>
            <Link to="/temp/updateEvent/2" className={"nav-link"}>
              event 2
            </Link>
            <Link to="/temp/updateEvent/3" className={"nav-link"}>
              event 3
            </Link>
            <Link to="/temp/updateEvent/4" className={"nav-link"}>
              event 4
            </Link>
            <Link to="/temp/updateEvent/5" className={"nav-link"}>
              event 5
            </Link>
            <Link
              to="/logout"
              onClick={() => console.log("Wyloguj się")}
              className={"nav-link d-lg-none"}
            >
              Wyloguj się
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
