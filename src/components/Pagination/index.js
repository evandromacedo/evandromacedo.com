import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper isOnePage={numPages === 1}>
    {!isFirst && <S.PaginationLink to={prevPage}>← Previous page</S.PaginationLink>}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast && <S.PaginationLink to={nextPage}>Next page →</S.PaginationLink>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
