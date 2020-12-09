import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

function NavBar(props) {
  const { location } = props;
  console.log(location);
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Proyecto BD 😎</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Mostrar todas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/empresa">Empresa </NavDropdown.Item>
              <NavDropdown.Item href="/persona">Persona </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Añadir" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/newempresa">Empresa </NavDropdown.Item>
              <NavDropdown.Item href="/newpersona">Persona </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Consultas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/consulta1">Deuda total de una casa</NavDropdown.Item>
              <NavDropdown.Item href="/consulta2">N° de arquitectos veteranos</NavDropdown.Item>
              <NavDropdown.Item href="/consulta3">N° de ingenieros con experiencia</NavDropdown.Item>
              <NavDropdown.Item href="/consulta4">Trabajador de su vivienda</NavDropdown.Item>
              <NavDropdown.Item href="/consulta5">Precio total de la ciudad</NavDropdown.Item>
              <NavDropdown.Item href="/consulta6">Casas en una calle</NavDropdown.Item>
              <NavDropdown.Item href="/consulta7">N° de casas soñadas</NavDropdown.Item>
              <NavDropdown.Item href="/consulta8">Casas por empresa</NavDropdown.Item>
              <NavDropdown.Item href="/consulta9">El más terrateniente</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
export default withRouter(NavBar);
