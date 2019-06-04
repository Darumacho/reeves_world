import React from 'react';
import { Link } from "react-router-dom";
import { Nav, NavDropdown, Form, FormControl, Navbar, Button} from 'react-bootstrap';

export function Sidebar() {
  return (
    <Navbar bg="dark" expand="lg" style={{margin: 0}}>
    <Navbar.Brand href="/"><img src={require('./header.png')} alt=""/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Accueil</Nav.Link>
        <Nav.Link href="/rain">Pluie</Nav.Link>
        <Nav.Link href="/morpion">Jouer au morpion</Nav.Link>
        <Nav.Link href="/top">Jouer à TopNumber</Nav.Link>
        <Nav.Link href="/video">Conférences</Nav.Link>
        <Nav.Link href="/guidoune">Guidoune du jour</Nav.Link>
        <Nav.Link href="/guidoune">Recettes</Nav.Link>
        <Nav.Link href="/guidoune">Guidoune Man</Nav.Link>
        <NavDropdown title="CSI Forever" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Histoire</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Personnages</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Armes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Armures</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Artefacts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Essences</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Compétences</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Talents</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Ennemis</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Lieux</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Distinctions</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="http://www.mediafire.com/file/aygv57ddo4v4b97/CSI_Forever_-_1.6.rar/file">Télécharger</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Sidebar;