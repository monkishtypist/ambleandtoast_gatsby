import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  margin: 0 auto;
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
