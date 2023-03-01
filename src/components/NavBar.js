import React, {useState} from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { NavLink, Router, Routes } from "react-router-dom"
import './Home.css';



export const NavbarComponent = (props) => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
    const handleBackgroundClick = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setBackgroundColor(randomColor);
        document.body.style.backgroundColor = randomColor;}
    return (
<Container>
 <Navbar display="flex" bg="white" variant="white" expand="sm" className="border" style={{ boxShadow: '0 0 30px rgba(43, 77, 50, 0.7)'}}>
        <Container>
          <Navbar.Brand onClick={handleBackgroundClick}>Meny</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ul">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/cv">Cv</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/kontakt">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    )
 

}
