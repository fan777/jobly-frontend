import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <>
      <Navbar color="light" light expand="md" className="px-3">
        <NavbarBrand href="/">jobly</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/jobs">Jobs</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signup">Sign Up</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/">Log Out</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigation
