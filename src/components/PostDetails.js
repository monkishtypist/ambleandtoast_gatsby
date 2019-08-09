import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 1em;
  width: 100%;
`

const Date = styled.p`
  display: inline-block;
`

const ReadingTime = styled.p`
  display: inline-block;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>{props.date}</Date>
      {/* <ReadingTime>{`${props.timeToRead} min read `}</ReadingTime> */}
    </Wrapper>
  )
}

export default PostDetails
