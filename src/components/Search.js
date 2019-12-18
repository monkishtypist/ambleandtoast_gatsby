import React, { Component } from "react"
import { Link } from "gatsby"
import { Index } from "elasticlunr"
import styled from 'styled-components'

const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.dark};
  padding-bottom: .5em;
  width: 100%;
  margin-bottom: 2rem;
`

const SearchResults = styled.ul`
  display: flex;
  flex-direction: column;
`

const SearchResult = styled.li`
  margin-bottom: .25em;
  margin-top: .25em;
`

const SearchResultLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
`

// Search component
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }

  render() {
    return (
      <>
        <SearchInput type="text" value={this.state.query} onChange={this.search} placeholder="What are you looking for?" />
        <SearchResults>
          {this.state.results.map(post => (
            <SearchResult key={post.id}>
              <SearchResultLink to={`/${post.slug}/`}>{post.title}</SearchResultLink>
            </SearchResult>
          ))}
        </SearchResults>
      </>
    )
  }
}

export default Search
