import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Main from '../components/blocks/Main'
import SEO from '../components/SEO'

const Container = styled.div`
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.container.maxWidthCentered};
  padding: ${props => props.theme.container.paddingY} ${props => props.theme.container.paddingX};
  width: 100%;
`

const Body = styled.div``

const AuthorTemplate = ({ data }) => {
  const {
    name,
    biography
  } = data.contentfulAuthor

  return (
    <Layout>
      <Helmet>
        <title>{`${name} - ${config.siteTitle}`}</title>
      </Helmet>

      <Main>
        <Container>
        <h1>{`${name}`}</h1>
          {typeof biography === 'object' && biography !== null &&
            <Body dangerouslySetInnerHTML={{ __html: biography.childMarkdownRemark.html }} />
          }
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
          html
        }
      }
    }
  }
`

export default AuthorTemplate
