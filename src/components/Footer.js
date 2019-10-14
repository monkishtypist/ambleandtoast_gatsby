import React from 'react'
import styled from 'styled-components'
import logo from '../images/website-logo.png'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
  img {
    &.brand-logo-footer {
      width: 100px;
      height: auto;
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="/"
        >
          <img src={logo} alt="Logo" className="brand-logo-footer" />
        </a>
      </Item>
      <Item>
        <a
          href="https://littlefinchmedia.com"
          target="_blank"
        >
          littlefinchmedia.com
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
