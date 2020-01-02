import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Helmet from 'react-helmet'
import Main from '../components/blocks/Main'
import Container from '../components/blocks/Container'
import PageTitle from '../components/PageTitle'
import Search from '../components/Search'
import config from '../utils/siteConfig'

const SearchPage = ({ data }) => {
  const postNode = {
    title: `Search - ${config.siteTitle}`,
  }
  const search = useStaticQuery(
    graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `
  )

  return (
    <Layout>
      <Helmet>
        <title>{`Search - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />
      <Main>
        <Container>
          <PageTitle>Search</PageTitle>
          <Search searchIndex={search.siteSearchIndex.index} />
        </Container>
      </Main>
    </Layout>
  )
}

export default SearchPage
