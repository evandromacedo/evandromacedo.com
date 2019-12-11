import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import * as S from './styled'
import * as GS from '../../styles/generalStyles'

const ProjectItem = ({ title, imgSharp, imgWidth, links, children }) => (
  <>
    <GS.GeneralH2>{title}</GS.GeneralH2>
    <S.ProjectItemImgWrapper imgWidth={imgWidth}>
      <Img alt={title} fluid={imgSharp} />
    </S.ProjectItemImgWrapper>
    <S.ProjectItemLinksWrapper>
      <GS.GeneralLink target="blank" href={links[0].href}>
        {links[0].label}
      </GS.GeneralLink>
      {links[1] && (
        <>
          {' / '}
          <GS.GeneralLink target="blank" href={links[1].href}>
            {links[1].label}
          </GS.GeneralLink>
        </>
      )}
      {'.'}
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
