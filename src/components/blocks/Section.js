import React from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  flex-grow: 1;
  width: 100%;
`

const Section = props => {
  return <SectionWrapper className={props.className}>{props.children}</SectionWrapper>
}

export default Section
