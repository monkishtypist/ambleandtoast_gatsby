import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'gatsby'
import Container from '../components/blocks/Container'
import Img from 'gatsby-image'
import PostDetails from './PostDetails'

const Post = styled.div`
  border-bottom: 1px solid ${props => rgba(props.theme.colors.highlight, .20)};
  border-radius: 0;
  flex: 1 0 100%;
  margin: 0 0 1em 0;
  height: 85vh;
  height: calc(100vh - 100px);
  position: relative;
  transition: all 0.45s ease;
`

const PostImage = styled(Img)`
  height: 100%;
  width: 100%;
  padding: 0;
  position: fixed;
`

const HeroContentWrapper = styled.div`
  bottom: 100px;
  color: ${props => props.theme.colors.light};
  left: 0;
  position: absolute;
  right: 0;
`

const HeroContainer = styled(Container)``

const Title = styled.h2`
  font-size: 2.5em;
  font-weight: 600;
  line-height: 1.1;
  text-transform: capitalize;
  margin: 0 auto 1rem;
`

const Excerpt = styled.p`
  margin: 0 auto 1rem;
  line-height: 1.6;
`

const PostLink = styled(Link)`
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

const HomeHero = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  ...props
}) => {
  return (
    <Post featured={props.featured}>
      <PostImage fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      <HeroContentWrapper>
        <HeroContainer>
          <Title>{title}</Title>
          <PostDetails
            date={publishDate}
          />
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.excerpt,
            }}
          />
        </HeroContainer>
      </HeroContentWrapper>
      <PostLink to={`/${slug}/`} />
    </Post>
  )
}

export default HomeHero
