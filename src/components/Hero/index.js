import React from 'react'
import { Title, Span, Container, Button } from './styles'

export const Hero = () => {
  return (
    <Container id='home'>
      <Span>Hello stranger</Span>
      <Title>I'm Sebastian Villegas</Title>
      <Title>Fullstack web developer</Title>
      <Button href='#portfolio'>Portfolio</Button>
    </Container>
  )
}
