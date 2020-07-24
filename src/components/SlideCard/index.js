import React from 'react'

import {
  Container,
  Title,
  SlideSroll
} from './styles'

import Card from '../Card'

const SlideCard = ({slide}) =>{
  return (
    <Container>
      <Title>{slide.title}</Title>
      <SlideSroll>
        {slide.itens && slide.itens.map((item, index) => (
          <Card key={index} item={item}/>
        ))}
      </SlideSroll>
    </Container>
  )
}

export default SlideCard