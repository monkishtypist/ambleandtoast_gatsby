import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/website-logo-white.png'
import logoSmallWhite from '../images/trees-white.png'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1em 0;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5em;
  width: 100%;

  .brand-link {
    display: flex;
  }
  .brand-logo {
    max-height: 3.25rem;
    width: auto;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    align-items: center;
    align-self: stretch;
    display: flex;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
    &:hover {
      background-image: url(${logoSmallWhite});
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <Link to="/" activeStyle={activeLinkStyle} className="brand-link">
          <img src={logo} alt="Logo" className="brand-logo" />
        </Link>
        <ul>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
