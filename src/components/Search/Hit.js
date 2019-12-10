import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => (
  <PostItem
    title={hit.title}
    slug={hit.fields.slug}
    tags={hit.tags}
    date={hit.date}
    description={hit.description}
    timeToRead={hit.timeToRead}
  />
)

export default Hit
