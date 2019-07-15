import React from 'react';
import { Nav, NavDropdown, Navbar} from 'react-bootstrap';

export function Sidebar() {
  return (
    <Navbar bg="dark" expand="lg" style={{margin: 0}} className="navbar-dark">
    <Navbar.Brand href="/"><img src={require('./header.png')} alt=""/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Accueil</Nav.Link>
        <Nav.Link href="/montreal">Montréal en direct</Nav.Link>
        <Nav.Link href="/morpion">Jouer au morpion</Nav.Link>
        <Nav.Link href="/mine">Jouer au Dépoutineur</Nav.Link>
        <Nav.Link href="/video">Conférences</Nav.Link>
        <Nav.Link href="/guidoune">Guidoune du jour</Nav.Link>
        <Nav.Link href="/journal">Journal</Nav.Link>
        <Nav.Link href="/boys">Les boys</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/heros">Générateur héros</Nav.Link>
        <Nav.Link href="/quiz">Questionnaire</Nav.Link>
        <NavDropdown title="CSI Forever" id="basic-nav-dropdown">
          <NavDropdown.Item href="/story">Histoire</NavDropdown.Item>
          <NavDropdown.Item href="/persos">Personnages</NavDropdown.Item>
          <NavDropdown.Item href="/lieux">Lieux</NavDropdown.Item>
          <NavDropdown.Item href="/armes">Armes</NavDropdown.Item>
          <NavDropdown.Item href="/armures">Armures</NavDropdown.Item>
          <NavDropdown.Item href="/artefacts">Artefacts</NavDropdown.Item>
          <NavDropdown.Item href="/essences">Essences</NavDropdown.Item>
          <NavDropdown.Item href="/skills">Compétences</NavDropdown.Item>
          <NavDropdown.Item href="/talents">Talents</NavDropdown.Item>
          <NavDropdown.Item href="/distinction">Distinctions</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="http://www.mediafire.com/file/aygv57ddo4v4b97/CSI_Forever_-_1.6.rar/file">Télécharger (1.6)</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Sidebar;