import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import * as S from './styled'

const ProjectItem = ({ title, imgSharp, imgWidth, links, children }) => (
  <>
    <h2>{title}</h2>
    <S.ProjectItemImgWrapper imgWidth={imgWidth}>
      <Img alt={title} fluid={imgSharp} />
    </S.ProjectItemImgWrapper>
    <S.ProjectItemLinksWrapper>
      {links.map((link, i) => {
        return (
          <Fragment key={i}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
            {i === links.length - 1 ? '.' : ', '}
          </Fragment>
        )
      })}
    </S.ProjectItemLinksWrapper>
    {children}
  </>
)

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgSharp: PropTypes.object.isRequired,
  imgWidth: PropTypes.number.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  children: PropTypes.node.isRequired,
}

export default ProjectItem
