import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PostLinkStyles from './PostLinks.module.scss'

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
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  width: 100%;
  a {
    background: ${props => props.theme.colors.base};
    color: #fff;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink to={`/${props.previous.slug}/`} className={`${PostLinkStyles.postLink} ${PostLinkStyles.postLinkPrevious}`}>
            <span className={PostLinkStyles.postLink__arrow}>&#8592;</span>
            <span className={PostLinkStyles.postLink__description}>{props.previous.title}&nbsp;</span>
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`/${props.next.slug}/`} className={`${PostLinkStyles.postLink} ${PostLinkStyles.postLinkNext}`}>
            <span className={PostLinkStyles.postLink__description}>&nbsp;{props.next.title}</span>
            <span className={PostLinkStyles.postLink__arrow}>&#8594;</span>
          </NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
