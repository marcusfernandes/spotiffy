import React from 'react'

import {
  Container, Photo, CaontainerSubtitle, SubtitleTitle, SubtitleDescription
} from './styles'

const Card = ({item}) => {
  return (
    <Container>
      <Photo source={{uri: item.photo}}/>
      <CaontainerSubtitle>
        <SubtitleTitle>{item.subtitle.title}</SubtitleTitle>
        <SubtitleDescription>{item.subtitle.description}</SubtitleDescription>
      </CaontainerSubtitle>
    </Container>
  )
};

export default Card;