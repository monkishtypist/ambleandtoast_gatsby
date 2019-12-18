import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logoSmallWhite from '../images/trees-white.png'

const MainNav = styled.nav`
  align-items: center;
  display: flex;
`

const MainMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-right: -1em;
`

const MainMenuItem = styled.li`
  flex: 1 0 auto;
  &:hover {
    background-image: url(${logoSmallWhite});
  }
`

const MainMenuLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  padding: 1em;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <MainNav className="mainnav">
      <MainMenu className="mainMenu">
        <MainMenuItem className="mainMenuItem">
          <MainMenuLink to="/about/" activeStyle={activeLinkStyle}>
            About
          </MainMenuLink>
        </MainMenuItem>
        <MainMenuItem className="mainMenuItem">
          <MainMenuLink to="/contact/" activeStyle={activeLinkStyle}>
            Contact
          </MainMenuLink>
        </MainMenuItem>
      </MainMenu>
    </MainNav>
  )
}

export default Menu
