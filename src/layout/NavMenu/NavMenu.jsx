import { Navbar,Container,Nav } from "react-bootstrap"
import { Link } from "react-router-dom"





export default function NavMenu () {
  const gitHubLink = "https://github.com/veronicadfl/profile-app";
  const Linkedinlink ="https://www.linkedin.com/in/veronicadefelice/"
    return (

        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
       
                 <a href={gitHubLink} 
                 target="_blank"
                 rel="noreferrel" ><i className="bi bi-github"></i></a>
                  <br/>
                <a href={Linkedinlink} 
                 target="_blank"
                 rel="noreferrel"><i className="bi bi-linkedin"></i></a>
                 <br/>
       
       
          <Navbar.Brand as={Link} to="/" href="#home"><i className="bi bi-house-fill"></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}