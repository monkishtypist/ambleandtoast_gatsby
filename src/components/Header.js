import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import Container from './blocks/Container'
import Menu from './menus/MainMenu'
import logo from '../images/website-logo-white.png'

const Wrapper = styled.header`
  background: ${props => props.theme.colors.black};
  width: 100%;
`

const NavContainer = styled(Container)`
  align-items: center;
  display: flex;
`

const BrandLink = styled(Link)`
  margin-right: auto;
`

const BrandLogo = styled.img`
  max-height: 3.25rem;
  width: auto;
`

const Header = () => {
  return (
    <Wrapper>
      <NavContainer>
        <BrandLink to="/" className="brandLink">
          <BrandLogo src={logo} alt="Logo" className="brandLogo" />
        </BrandLink>
        <Menu />
      </NavContainer>
    </Wrapper>
  )
}

export default Header
