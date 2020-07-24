import React, {useState} from 'react';

import {
  Container,
  ContainerHeader,
  ContainerNavBar,
  GroupItenNavBar,
  ButtonFllow,
  ContainerInfoBand,
  BandName,
  BandFooter,
  Photo,
  Content,
  ButtonRandomOrder,
  ButtonRandomOrderText,
  InfoCategory,
  ContainerMusic,
  Music,
  MusicGrouAllItens,
  MusicGroupItens,
  MusicaNumber,
  MusicaListening,
  MusicaName,
} from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5'
import musics from './musics.json' 

const Album = () => {

  const [iconConfiguration] = useState({
    size:20,
    color:"#FFF"
  })

  

  const Musics = () => {
    return musics && musics.map((music,index) => (
      <Music key={index}>
        <MusicGrouAllItens>
          <MusicaNumber>{index++}</MusicaNumber>
          <MusicGroupItens>
            <MusicaName>{music.name}</MusicaName>
            <MusicaListening>{music.listening}</MusicaListening>
          </MusicGroupItens>
        </MusicGrouAllItens>
        <Icon name="ellipsis-v" color="#aaa" size={16} style={{
          padding:30,
        }}/>
      </Music>
    ))
  }

  return(
    <Container>
        <Photo source={{uri:'https://i.scdn.co/image/3cab7a705d1fefebd1f7c8bf03f27587ae697ead'}}/>
        <ContainerHeader>
          <ContainerNavBar>
            <Icon name="arrow-left" {...iconConfiguration}/>
            <GroupItenNavBar>
              <ButtonFllow>Seguindo</ButtonFllow>
              <Icon name="ellipsis-v" {...iconConfiguration}/>
            </GroupItenNavBar>
          </ContainerNavBar>
          <ContainerInfoBand>
              <BandName>NickelBack</BandName>
              <BandFooter>8.500.752 ouvintes mensais</BandFooter>
          </ContainerInfoBand>
        </ContainerHeader>
        <Content>
          <ButtonRandomOrder>
            <ButtonRandomOrderText>
                Ordem Aleatória
            </ButtonRandomOrderText>
          </ButtonRandomOrder>
          <InfoCategory>Popular</InfoCategory>
          <ContainerMusic>
            <Musics/>
          </ContainerMusic>
        </Content>
    </Container>
  )
}

export default Album;