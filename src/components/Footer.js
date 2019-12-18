import React from 'react'
import styled from 'styled-components'
import Container from './blocks/Container'
import FooterMenu from './menus/FooterMenu'

const Wrapper = styled.footer`
  width: 100%;
`

const Footer = () => (
  <Wrapper>
    <Container>
      <hr />
      <FooterMenu />
    </Container>
  </Wrapper>
)

export default Footer
