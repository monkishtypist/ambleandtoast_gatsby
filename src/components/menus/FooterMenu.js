import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'
import logo from '../../images/website-logo.png'

const Nav = styled.nav`
  align-items: center;
  display: flex;
  margin-right: -1em;
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`

const ListItemLogo = styled.li`
  flex: 0 1 auto;
  margin-right: auto;
`

const ListItem = styled.li`
  flex: 0 1 auto;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  font-weight: 600;
  padding: 1em;
  transition: all 0.2s;
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
  &.active {
    color: ${props => lighten(0.1, props.theme.colors.highlight)};
  }
`

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.dark};
  font-weight: 600;
  padding: 1em;
  transition: all 0.2s;
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`

const NavLogo = styled.img`
  height: auto;
  width: 100px;
`

const Menu = () => {
  return (
    <Nav>
      <List>
        <ListItemLogo>
          <Link to="/">
            <NavLogo src={logo} alt="Logo" className="brand-logo-footer" />
          </Link>
        </ListItemLogo>
        <ListItem>
          <NavLink to="/privacy-policy/" activeClassName="active">
            Privacy
          </NavLink>
        </ListItem>
        <ListItem>
          <ExternalLink href="https://littlefinchmedia.com" target="_blank">
            littlefinchmedia.com
          </ExternalLink>
        </ListItem>
      </List>
    </Nav>
  )
}

export default Menu
