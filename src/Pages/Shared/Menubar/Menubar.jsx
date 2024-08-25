import { Button, Container, Nav,  Navbar,  Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Menubar.css'

const Menubar = () => {
  return (
    <>
    {["lg"].map((expand) => (
      <Navbar sticky="top" key={expand} expand={expand} className="bg-navbar mb-3 " data-bs-theme="dark">
        <Container fluid >
        <Nav className="justify-content-start flex-grow-1 ps-2">
        {/* <Navbar.Brand as={Link}>Tourism-Website</Navbar.Brand> */}
        <Link class="btn btn-ghost text-xl">Tourism-Website</Link>
        </Nav>
          
          <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`} 
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className = "bg-canvas"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                Tourism-Website
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="items-center nav-center-end lg:space-x-20">
              <Nav className="justify-content-center flex-grow-1  menu-items ">
                <Nav.Link as={Link}>Home</Nav.Link>
                <Nav.Link as={Link}>About</Nav.Link>
                <Nav.Link as={Link}>My Bookings</Nav.Link>
                <Nav.Link as={Link}>Manage All Bookings</Nav.Link>
                <Nav.Link as={Link}>Add Places</Nav.Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link}>
                <Button className="bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white px-4  rounded-r-3xl rounded-l-3xl btn-sm">Login</Button>
                  
                  </Nav.Link>
              </Nav>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  );
};

export default Menubar;