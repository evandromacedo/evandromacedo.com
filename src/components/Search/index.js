import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  connectStateResults,
} from 'react-instantsearch-dom'

import Hit from './Hit'

import * as S from './styled'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const SearchResults = connectStateResults(({ searchState, searchResults }) => {
  if (searchResults && searchResults.nbHits) {
    if (searchState && searchState.query) {
      return (
        <>
          <Stats />
          <Hits hitComponent={Hit} />
        </>
      )
    }

    return null
  } else {
    if (searchState.query) {
      return (
        <S.SearchNoResults>
          <p>No results have been found for "{searchState.query}" 😕</p>
        </S.SearchNoResults>
      )
    }

    return null
  }
})

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox autoFocus translations={{ placeholder: 'Search...' }} />
      <SearchResults />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
