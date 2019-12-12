import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import styled from 'styled-components'

import * as S from '../styles/generalStyles'
import MeWithBeers from '../images/about/me-with-beers.jpg'

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      description="Know a little more about Evandro Macedo and this blog."
    />
    <S.GeneralWrapper>
      <S.GeneralH1>About</S.GeneralH1>

      <S.GeneralDescription>
        <S.GeneralEmphasis>Me, Skillset, Usage, Interests, The Blog</S.GeneralEmphasis>
      </S.GeneralDescription>

      <S.GeneralH2>Me</S.GeneralH2>

      <S.GeneralParagraph>
        I'm Evandro Macedo, a web developer born in the Northeast of Brazil. I believe in
        an independent World Wide Web with open knowledge and democratized information. I
        was a curious and passionate kid about computers, raised by the internet and
        guided by it ever since.
      </S.GeneralParagraph>
      <S.GeneralParagraph>
        Before I graduated in Internet Systems Technology, I studied Computer Networks and
        Chemistry (yeah, I don't know why) but I quickly realized they didn't fit for me.
        After I started studying how the Web works I was fulfilled with enthusiasm and
        have found this was the right career to follow.
      </S.GeneralParagraph>
      <S.GeneralParagraph>
        I find myself more interested in design and programming, so naturally I tend to
        study more front-end development and client-side stuff in general. Most of the
        time I'm working with HTML5, CSS3, ES6 and all the things derived from them. New
        web technologies makes me excited to learn.
      </S.GeneralParagraph>
      <S.GeneralParagraph>
        When I'm not coding probably I'm drinking some beer with my friends, watching a
        movie/series, playing guitar/bass, reading a book, playing a game or watching some{' '}
        <S.GeneralLink target="blank" href="https://www.youtube.com/watch?v=5TbUxGZtwGI">
          video about the space-time like this one
        </S.GeneralLink>{' '}
        and having an existencial crisis.
      </S.GeneralParagraph>
      <img src={MeWithBeers} alt="Me with beers" />
      <S.GeneralH3>Skillset</S.GeneralH3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: '1.6rem',
          justifyItems: 'center',
        }}
      >
        <div>
          <S.GeneralParagraph>
            <S.GeneralEmphasis>Techs I'm currently using or studying:</S.GeneralEmphasis>
          </S.GeneralParagraph>
          <S.GeneralList>
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
          </S.GeneralList>
        </div>

        <div>
          <S.GeneralParagraph>
            <S.GeneralEmphasis>
              Techs I've already worked with or studied:
            </S.GeneralEmphasis>
          </S.GeneralParagraph>
          <S.GeneralList>
            <li>AngularJS (1.x)</li>
            <li>jQuery</li>
            <li>Sass</li>
            <li>Bootstrap / Foundation</li>
            <li>PHP</li>
            <li>MySQL / PostgreSQL</li>
            <li>Python / Django</li>
            <li>Ruby on Rails</li>
            <li>Java / JSF</li>
            <li>Scrum and Kanban</li>
          </S.GeneralList>
        </div>
      </div>
    </S.GeneralWrapper>
  </Layout>
)

export default AboutPage
