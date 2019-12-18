import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 2em;
  width: 100%;
`

const PostLink = styled(Link)`
  background: ${props => props.theme.colors.dark};
  color: #fff;
  transition: 0.2s;
  padding: 0;
  border-radius: 2px;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`

const LinkDescription = styled.span`
  box-sizing: border-box;
  display: inline-block;
  max-width: 0;
  overflow: hidden;
  padding-top: 1rem;
  padding-right: 0;
  padding-bottom: 1rem;
  padding-left: 0;
  transition: all .15s linear;
  vertical-align: bottom;
  white-space: nowrap;
  width: auto;

  ${PostLink}:hover & {
    max-width: 450px;
  }
`

const PreviousLink = styled(PostLink)`
  margin-right: auto;
  order: 1;
`
const NextLink = styled(PostLink)`
  margin-left: auto;
  order: 2;
`

const PreviousLinkDescription = styled(LinkDescription)`
  ${PostLink}:hover & {
    padding-right: 1rem;
  }
`

const NextLinkDescription = styled(LinkDescription)`
  ${PostLink}:hover & {
    padding-left: 1rem;
  }
`

const LinkArrow = styled.span`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 1rem;
  vertical-align: bottom;
  white-space: nowrap;
  width: auto;
`

const PostLinks = props => {
  return (
    <Wrapper>
      {props.previous && (
        <PreviousLink to={`/${props.previous.slug}/`}>
          <LinkArrow>&#8592;</LinkArrow>
          <PreviousLinkDescription>{props.previous.title}&nbsp;</PreviousLinkDescription>
        </PreviousLink>
      )}
      {props.next && (
        <NextLink to={`/${props.next.slug}/`}>
          <NextLinkDescription>&nbsp;{props.next.title}</NextLinkDescription>
          <LinkArrow>&#8594;</LinkArrow>
        </NextLink>
      )}
    </Wrapper>
  )
}

export default PostLinks
