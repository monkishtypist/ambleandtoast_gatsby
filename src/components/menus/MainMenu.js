import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'

const Nav = styled.nav`
  align-items: center;
  display: flex;
  margin-right: -1em;
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`

const ListItem = styled.li`
  flex: 1 0 auto;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  padding: 1em;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
  &.active {
    color: ${props => lighten(0.1, props.theme.colors.highlight)};
  }
`

const Menu = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <NavLink to="/about/" activeClassName="active">
            About
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contact/" activeClassName="active">
            Contact
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/search/" activeClassName="active">
            Search
          </NavLink>
        </ListItem>
      </List>
    </Nav>
  )
}

export default Menu
