import React from 'react'
import styled from 'styled-components'
import logo from '../images/website-logo.png'

const Wrapper = styled.footer`
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.container.maxWidth};
  padding: ${props => props.theme.container.paddingY} ${props => props.theme.container.paddingX};
`

const Break = styled.hr`
  border: none;
  border-top: 1px solid ${props => props.theme.colors.highlight};
  margin-bottom: 1rem;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`

const Item = styled.li`
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.dark};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.dark};
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
    <Container>
      <Break />
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
    </Container>
  </Wrapper>
)

export default Footer
