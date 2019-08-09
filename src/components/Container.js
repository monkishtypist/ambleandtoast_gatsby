import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1.5em;
  flex-grow: 1;
  width: 100%;
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
