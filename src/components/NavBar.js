import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { useRouter } from 'next/router'

const Links = [
  { name: 'Top', linkTo: '/' },
  { name: 'New', linkTo: '/new' },
  { name: 'Best', linkTo: '/best' },
  { name: 'Ask', linkTo: '/ask' },
  { name: 'Show', linkTo: '/show' },
  { name: 'Jobs', linkTo: '/jobs' },
]

const GenLink = ({ name, linkTo }) => {
  const router = useRouter()
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        onClick={() => router.push(linkTo)}
        style={{ cursor: 'pointer' }}>{name}</a>
    </li>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href='/'>HN React</NavbarBrand>
        <Fragment>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                Links.map((each, index) => <GenLink key={index} {...each} />)
              }
            </Nav>
          </Collapse>
        </Fragment>
      </Navbar>
    </div>
  )
}

export default NavBar
