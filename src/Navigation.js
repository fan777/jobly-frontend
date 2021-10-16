import { /*useState,*/ useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, /*Collapse, NavbarToggler,*/ NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import UserContext from './users/userContext';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // const [collapsed, setCollapsed] = useState(true);
  // const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar color="light" light expand="md" className="px-3">
        <NavbarBrand href="/">jobly</NavbarBrand>
        {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar> */}
        <Nav className="ms-auto" navbar>
          {currentUser ? (
            <>
              <NavItem className="mx-2">
                <NavLink tag={Link} to="/companies">Companies</NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink tag={Link} to="/jobs">Jobs</NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink tag={Link} to="/profile">Profile</NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink tag={Link} to="/">Log Out  {`${currentUser.username}`}</NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem className="mx-2">
                <NavLink tag={Link} to="/login">Login</NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink tag={Link} to="/signup">Sign Up</NavLink>
              </NavItem>
            </>
          )}
        </Nav>
        {/* </Collapse> */}
      </Navbar>
    </>
  )
}

export default Navigation
