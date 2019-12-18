import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.main`
  flex-grow: 1;
  width: 100%;
`

const Main = props => {
  return <MainWrapper className={props.className}>{props.children}</MainWrapper>
}

export default Main
