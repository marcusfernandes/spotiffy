import React, {useState, useEffect} from 'react'

import {
  Container,
  ContainerScrollView
} from './styles'

import SlideCard from '../../components/SlideCard'
import Mock from '../../services/mock'

const Main = () => {

  const [slides, setSlides] = useState();

  const onFetchSlides = async () => {
    const response = await Mock.fetchSlides();

    setSlides(response)

  }


  useEffect(() => {
    onFetchSlides();
  },[])

  return(
    <Container>
      <ContainerScrollView>
       {slides && slides.map((slide, index) => (
         <SlideCard slide={slide}/>
       ))} 
      </ContainerScrollView>
    </Container>
  )
}

export default Main;