import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  connectStateResults,
} from 'react-instantsearch-dom'

import * as S from './styled'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Content = connectStateResults(({ searchState, searchResults }) => {
  if (searchResults && searchResults.nbHits) {
    if (searchState && searchState.query) {
      return (
        <>
          <Stats />
          <Hits />
        </>
      )
    }

    return null
  } else {
    return <div>No results has been found for {searchState.query}</div>
  }
})

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox autoFocus translations={{ placeholder: 'Search...' }} />
      <Content />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
