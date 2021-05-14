import React from 'react'
import { MainText, Container, Span, IconsList, Icon, CVButton } from './styles'

export const About = () => {
  return (
    <Container id='about'>
      <Span>About me</Span>
      <MainText>
        I'm a code lover willing to relocate and open to remote work. I design
        beatiful websites and powerful APIs
      </MainText>
      <CVButton
        href='https://drive.google.com/file/d/1kGH1FMWIbxuZvguAcRZbLXs9guLgFgvC/view?usp=sharing'
        target='_blank'
        rel='noopener noreferer'
      >
        Download Resume
      </CVButton>
      <Span>Technologies I use</Span>
      <IconsList>
        <Icon src='https://i.ibb.co/mT3ykMf/reactjs.png' alt='react icon' />
        <Icon src='https://i.ibb.co/Sn8ZSyd/web.png' alt='web icon' />
        <Icon src='https://i.ibb.co/tqQq7F9/NodeJs.png' alt='nodejs icon' />
        <Icon src='https://i.ibb.co/jvd4wVY/express.png' alt='express icon' />
        <Icon src='https://i.ibb.co/ZVcX38N/mongodb.png' alt='mongodb icon' />
        <Icon src='https://i.ibb.co/fSpG7KL/my-Sql-Icon.png' alt='sql icon' />
        <Icon src='https://i.ibb.co/VCDSptG/gitIcon.png' alt='git icon' />
        <Icon src='https://i.ibb.co/M71JL1h/python.png' alt='python icon' />
      </IconsList>
    </Container>
  )
}
