import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as S from './styled'
import { BaseContent } from '../../styles/base'

const About = () => {
  const { meWithBeers } = useStaticQuery(graphql`
    query {
      meWithBeers: file(relativePath: { eq: "about/me-with-beers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BaseContent>
      <h1>About</h1>
      <h2 className="description">Me, Skillset, Usage and The blog</h2>

      <h2>Me</h2>

      <p>
        I'm Evandro Macedo, a web developer born in the Northeast of Brazil. I believe in
        an independent World Wide Web with open knowledge and democratized information. I
        was a curious and passionate kid about computers, raised by the internet and
        guided by it ever since.
      </p>
      <p>
        Before I graduated in Internet Systems Technology, I studied Computer Networks and
        Chemistry (yeah, I don't know why) but I quickly realized they didn't fit for me.
        After I started studying how the Web works I was fulfilled with enthusiasm and
        have found this was the right career to follow.
      </p>
      <p>
        I find myself more interested in design and programming, so naturally I tend to
        study more front-end development and client-side stuff in general. Most of the
        time I'm working with HTML5, CSS3, ES6 and all the things derived from them. New
        web technologies makes me excited to learn.
      </p>
      <p>
        When I'm not coding probably I'm drinking some beer with my friends, watching a
        movie/series, playing guitar/bass, reading a book, playing a game or watching some{' '}
        <a target="blank" href="https://www.youtube.com/watch?v=5TbUxGZtwGI">
          video about the space-time like this one
        </a>{' '}
        and having an existencial crisis.
      </p>
      <Img alt="Me with beers" fluid={meWithBeers.childImageSharp.fluid} />

      <h2>Skillset</h2>

      <S.ColumnWrapper>
        <S.Column>
          <h3>Currently using and studying:</h3>
          <ul>
            <li>HTML5, CSS3 and ES6+Beyond</li>
            <li>Git</li>
            <li>Mobile and Responsive Web Design</li>
            <li>React / Redux</li>
            <li>CSS-in-JS (Styled Components)</li>
            <li>TDD (Jest and Enzyme)</li>
            <li>Next</li>
            <li>Gatsby</li>
            <li>GraphQL (Apollo, Prisma)</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </ul>
        </S.Column>
        <S.ColumnDivider />
        <S.Column>
          <h3>Already worked with or studied:</h3>
          <ul>
            <li>AngularJS (1.x)</li>
            <li>jQuery</li>
            <li>Sass</li>
            <li>Bootstrap / Foundation</li>
            <li>PHP</li>
            <li>SQL / MySQL / PostgreSQL</li>
            <li>Python / Django</li>
            <li>Ruby on Rails</li>
            <li>Java / JSF</li>
            <li>Scrum / Kanban</li>
          </ul>
        </S.Column>
      </S.ColumnWrapper>

      <h2>Usage</h2>

      <S.ColumnWrapper>
        <S.Column>
          <h3>Hardware:</h3>
          <ul>
            <li>An old MacBook Pro (13", Mid 2012), Intel Core i5, 8GB RAM, 240GB SSD</li>
            <li>External monitor LG 21,5" 22MP55PQ</li>
            <li>Magic Keyboard</li>
            <li>Magic Mouse</li>
            <li>Apple EarPods</li>
          </ul>
        </S.Column>
        <S.ColumnDivider />
        <S.Column>
          <h3>Software:</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Hyper Terminal</li>
            <li>Dracula Theme</li>
            <li>Sketch for design</li>
            <li>Spotify for music</li>
            <li>Evernote for notes</li>
          </ul>
        </S.Column>
      </S.ColumnWrapper>

      <hr />

      <h2>The blog</h2>

      <p>
        It was made with the intention of sharing some of my knowledge and document how I
        solved technical and non-technical problems. The absence of comments in this site
        is intentional, but you can reach me in any social media if you want to say
        something.
      </p>

      <p>
        This blog is powered by{' '}
        <a target="blank" href="https://www.gatsbyjs.org/">
          Gatsby
        </a>
        . The search functionality is powered by{' '}
        <a target="blank" href="https://www.algolia.com/">
          Algolia
        </a>
        . The source code is{' '}
        <a target="blank" href="https://github.com/evandromacedo/evandromacedo.com">
          publicly available
        </a>{' '}
        and you can{' '}
        <a target="blank" href="https://github.com/evandromacedo/evandromacedo.com/pulls">
          submit a pull request
        </a>{' '}
        if you see something wrong. Thank you!
      </p>
    </BaseContent>
  )
}

export default About
