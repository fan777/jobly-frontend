import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar color="light" light expand="md" className="px-3">
        <NavbarBrand href="/">jobly</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/jobs">Jobs</NavLink>
            </NavItem>
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
        </Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
