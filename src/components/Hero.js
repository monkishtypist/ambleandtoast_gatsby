import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 300px;
  padding-top: 100px;
  position: relative;
`
const BgImg = styled(Img)`
  height: 400px;
  left: 0;
  min-width: 100%;
  top: 0;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 3em;
  font-weight: 600;
  max-width: ${props => props.theme.container.maxWidthCentered};
  position: absolute;
  text-align: center;
  text-transform: capitalize;
`

const Hero = props => (
  <Wrapper>
    <BgImg
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
    />
    <Title>{props.title}</Title>
  </Wrapper>
)

export default Hero
