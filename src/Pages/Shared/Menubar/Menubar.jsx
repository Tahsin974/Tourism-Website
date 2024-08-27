import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Menubar.css";
import useFirebase from "../../../Hooks/useFirebase";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";

const Menubar = () => {
  const { user, userSignOut, setUser } = useFirebase();
  const navigate = useNavigate();
  const logOut = () => {
    userSignOut().then(() => {
      setUser({});
      navigate("/home");
    });
  };
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-navbar mb-3"
          data-bs-theme="dark"
        >
          <Container fluid>
            <Nav className="justify-content-start flex-grow-1 ps-2">
              {/* <Navbar.Brand as={Link}>Tourism-Website</Navbar.Brand> */}
              <Link class="btn btn-ghost text-xl">Tourism-Website</Link>
            </Nav>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-canvas"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Tourism-Website
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="items-center nav-center-end lg:space-x-20">
                  <Nav className="justify-content-center flex-grow-1  menu-items ">
                    <Nav.Link as={Link} to="/home">
                      Home
                    </Nav.Link>
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                      
                      {user?.email ? (
                      <>
                      <NavDropdown.Item  >
                      About
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link}>
                      My Bookings
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link}>
                      Manage All Bookings
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link}>
                      Add Places
                      </NavDropdown.Item>
                        
                        
                      </>
                    ) : (
                      <>
                        <NavDropdown.Item  >
                      About
                      </NavDropdown.Item>
                      </>
                    )}
                    </NavDropdown>
                    <Nav.Link as={HashLink} to="/home#places">
                      Places
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/home#offers">
                      Offers
                    </Nav.Link>
                    
                  </Nav>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {user?.email ? <>
                      <div className="flex items-center space-x-2">
                      <p className="text-white">{user.displayName}</p>
                      <Button
                        onClick={logOut}
                        className="bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white px-4  rounded-r-3xl rounded-l-3xl btn-sm"
                      >
                        LogOut
                      </Button>
                      </div>
                    </> : (
                      <Nav.Link as={Link} to="/login">
                        <Button className="bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white px-4  rounded-r-3xl rounded-l-3xl btn-sm">
                          Login
                        </Button>
                      </Nav.Link>
                    )}
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
