import React, { PureComponent, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

class NavBar extends PureComponent {
  state = {
    isOpen: false
  }

  toggle = () =>  {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">HN React</NavbarBrand>
          <Fragment>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/">Top</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/new">New</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/best">Best</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/ask">Ask</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/show">Show</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/jobs">Jobs</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Fragment>
        </Navbar>
      </div>
    );
  }
}

export default NavBar
