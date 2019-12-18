import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 1em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  width: 100%;
`

const Date = styled.p`
  display: inline-block;
  font-size: .8rem;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>{props.date}</Date>
    </Wrapper>
  )
}

export default PostDetails
