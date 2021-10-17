import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import UserContext from './users/userContext';

const Navigation = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <Navbar color="light" light expand="md" className="px-3">
        <NavbarBrand href="/">jobly</NavbarBrand>
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
                <NavLink tag={Link} to="/" onClick={logout}>Log Out  {`${currentUser.username}`}</NavLink>
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
      </Navbar>
    </>
  )
}

export default Navigation
