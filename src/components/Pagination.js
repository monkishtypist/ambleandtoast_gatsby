import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Wrapper from './blocks/Section'
import Container from './blocks/Container'

const PaginationWrapper = styled(Wrapper)``

const PaginationContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

const PaginationLink = styled(Link)`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`

const PreviousLink = styled(PaginationLink)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(PaginationLink)`
  margin-left: auto;
  order: 3;
`

const PageIndicator = styled.span`
  color: gray;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  padding: 1em 1.5em;
  z-index: -1;
  opacity: 0.7;
`

class Pagination extends React.Component {
  render() {
    const { numPages, currentPage, slug } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const isNotPaginated = isFirst & isLast

    const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1
    const nextPageNum = currentPage + 1

    const pathPrefix = typeof slug === 'string' ? `/tag/${slug}` : ''
    const prevPageLink = isFirst ? null : `${pathPrefix}/${prevPageNum}/`
    const nextPageLink = isLast ? null : `${pathPrefix}/${nextPageNum}/`

    return (
      <PaginationWrapper>
        <PaginationContainer>
          {!isFirst && (
            <PreviousLink to={prevPageLink}>&#8592; Prev Page</PreviousLink>
          )}
          {!isNotPaginated && (
            <PageIndicator>
              {currentPage}/{numPages}
            </PageIndicator>
          )}
          {!isLast && <NextLink to={nextPageLink}>Next Page &#8594;</NextLink>}
        </PaginationContainer>
      </PaginationWrapper>
    )
  }
}

export default Pagination
