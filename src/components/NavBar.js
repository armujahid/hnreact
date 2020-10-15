import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import Link from 'next/link'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>  {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} href="/">HN React</NavbarBrand>
        <Fragment>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} href="/">Top</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} href="/new">New</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} href="/best">Best</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} href="/ask">Ask</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} href="/show">Show</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} href="/jobs">Jobs</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Fragment>
      </Navbar>
    </div>
  )
}

export default NavBar
