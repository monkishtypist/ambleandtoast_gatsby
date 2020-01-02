import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Helmet from 'react-helmet'
import Container from '../components/blocks/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import config from '../utils/siteConfig'

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <SEO postNode={postNode} pagePath="contact" customTitle />
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
