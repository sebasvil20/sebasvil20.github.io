import React from 'react'
import {
  CardContainer,
  Image,
  TextWrapper,
  Title,
  Description,
  Anchor,
} from './styles'

export const WorkCard = ({ title, image, description, link }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Anchor href={link} target='_blank' rel='noopener noreferrer'>
          Go to website
        </Anchor>
      </TextWrapper>
    </CardContainer>
  )
}
