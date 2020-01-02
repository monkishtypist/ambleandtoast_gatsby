import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PostDetails from './PostDetails'

const Post = styled.li`
  border: 1px solid ${props => rgba(props.theme.colors.highlight, .20)};
  border-radius: 0;
  flex: 0 0 100%;
  margin: 0 0 1em 0;
  position: relative;
  transform: scale(1);
  transition: all 0.45s ease;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2% 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
    &:nth-child(4n-3),
    &:nth-child(4n-4) {
      flex: ${props => (props.featured ? '0 0 100%' : '0 0 66%')};
    }
  }
  &:hover {
    box-shadow: 0px 0px 12px ${props => rgba(props.theme.colors.black,.16)};
    transform: scale(1.005);
  }
`

const PostLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  display: flex;
  flex-flow: column;
  height: 100%;
  text-decoration: none;
  width: 100%;
`

const PostImage = styled(Img)`
  height: 240px;
  padding: 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    height: 300px;
    // padding-bottom: ${props => (props.featured ? '40%' : '60%')};
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: 400px;
  }
`

const CardBody = styled.div`
  padding: 1rem;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.5;
  text-transform: capitalize;
  margin: 0 auto 1rem;
`

const Excerpt = styled.p`
  margin: 0 auto 1rem;
  line-height: 1.6;
`

const Card = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  ...props
}) => {
  return (
    <Post featured={props.featured}>
      <PostLink to={`/${slug}/`}>
        <PostImage fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
        <CardBody>
          <Title>{title}</Title>
          <PostDetails
            date={publishDate}
          />
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.excerpt,
            }}
          />
        </CardBody>
      </PostLink>
    </Post>
  )
}

export default Card
