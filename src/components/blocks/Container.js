import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.container.maxWidth};
  padding: ${props => props.theme.container.paddingY} ${props => props.theme.container.paddingX};
  width: 100%;
`

const Container = props => {
  return <ContainerWrapper className={props.className}>{props.children}</ContainerWrapper>
}

export default Container
