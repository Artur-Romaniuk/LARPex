import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles/navigation.scss";
import ButtonComp from "./ButtonComp.tsx";
import ChangeUserSelect from "./ChangeUserSelect.tsx";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navigation">
      <Container fluid className={"navBrand"}>
        <Navbar.Brand>Larpex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="d-none d-lg-inline-flex">
          <ChangeUserSelect className="" />
          <ButtonComp
            className="btn btn-light d-none d-lg-block"
            onClick={() => console.log("wyloguj")}
            text={"Wyloguj się"}
          />
        </div>
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
            <Link to="/utworz-wydarzenie" className={"nav-link"}>
              Utwórz wydarzenie
            </Link>

            <Link to="/user/events" className={"nav-link"}>
              Wydarzenia użytkownika
            </Link>

            <ChangeUserSelect
              className={"d-lg-none text-white bg-dark ps-3 nav-link"}
            />

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
