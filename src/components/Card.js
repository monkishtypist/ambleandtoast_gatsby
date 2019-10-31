import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PostDetails from './PostDetails'

const Post = styled.li`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 0;
  flex: 0 0 100%;
  margin: 0 0 1em 0;
  position: relative;
  transition: all 0.2s ease-in-out;
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
    /* background: ${props => props.theme.colors.tertiary}; */
    box-shadow: 0px 0px 12px rgba(0,0,0,.16);
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      padding: 0;
      height: 240px;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        height: 300px;
        // padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
      @media screen and (min-width: ${props => props.theme.responsive.medium}) {
        height: 400px;
      }
    }
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
  body: {
    childMarkdownRemark: {
      timeToRead
    }
  },
  ...props
}) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
        <CardBody>
          <Title>{title}</Title>
          <PostDetails
            date={publishDate}
            timeToRead={timeToRead}
          />
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.excerpt,
            }}
          />
        </CardBody>
      </Link>
    </Post>
  )
}

export default Card
