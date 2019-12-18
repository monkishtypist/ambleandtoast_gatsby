import React from 'react'
import styled from 'styled-components'

const Date = styled.p`
  display: inline-block;
  font-size: .8rem;
  margin-bottom: 1em;
`

const PostDetails = props => {
  return (
    <Date>{props.date}</Date>
  )
}

export default PostDetails
