import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import config from '../utils/siteConfig'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Template = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            rssMetadata {
              title
            }
          }
        }
      }
    `
  )

  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <GlobalStyle theme={theme} />

      <ThemeProvider theme={theme}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </div>
  )
}

export default Template
