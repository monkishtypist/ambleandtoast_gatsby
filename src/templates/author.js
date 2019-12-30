import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Main from '../components/blocks/Main'
import PostBody from '../components/PostBody'
import SEO from '../components/SEO'

const Container = styled.div`
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.container.maxWidthCentered};
  padding: ${props => props.theme.container.paddingY} ${props => props.theme.container.paddingX};
  width: 100%;
`

const AuthorTemplate = ({ data }) => {
  const {
    name,
    slug,
    biography
  } = data.contentfulAuthor
  const postNode = data.contentfulAuthor

  return (
    <Layout>
      <Helmet>
        <title>{`${name} - ${config.siteTitle}`}</title>
      </Helmet>

      <Main>
        <h1>{`${name}`}</h1>
        <Container>
          <PostBody body={biography} />
        </Container>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulAuthor(slug: { eq: $slug }) {
      name
      email
      slug
      instagramUsername
      biography {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default AuthorTemplate
