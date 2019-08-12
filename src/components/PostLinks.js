import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1.5em 2em;
  flex-grow: 1;
  width: 100%;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
  span {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    max-width: 0;
    transition: max-width .15s linear;
    vertical-align: bottom;
  }
  &:hover span {
    width: auto;
    max-width: 200px;
  }
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
  span {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    max-width: 0;
    transition: max-width .15s linear;
    vertical-align: bottom;
  }
  &:hover span {
    width: auto;
    max-width: 200px;
  }
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink to={`/${props.previous.slug}/`}>
            <span>{props.previous.title}&nbsp;</span>
            &#8592; Newer Post
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`/${props.next.slug}/`}>
            Older Post &#8594;
            <span>&nbsp;{props.next.title}</span>
          </NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
