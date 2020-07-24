import LinearGratient from 'react-native-linear-gradient'
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  background-color:#111;
`;

export const ContainerHeader = styled(LinearGratient).attrs({
  colors:['#111','transparent','transparent','#111']
})`
  height:50%;
  justify-content:space-between;
`;

export const ContainerNavBar = styled.View`
  flex-direction:row;
  justify-content:space-between;
  padding:20px;
  align-items:center;
`;

export const Photo = styled.Image`
  position:absolute;
  left:0;
  top:0px;
  right:0;
  bottom:50%;
`;

export const GroupItenNavBar = styled.View`
  flex-direction:row;
  align-items:center;
`;

export const ButtonFllow = styled.Text`
  margin-right:20px;
  color:#FFF;
  border-color:#FFF;
  border-width:1px;
  padding:6px 10px;
  border-radius:6px;
  font-size:13px;

`;

export const ContainerInfoBand = styled.View`
  justify-content:center;
  align-items:center;
  padding:15px;
`;

export const BandName = styled.Text`
  font-size:65px;
  color:#FFF;
  font-weight:bold;
  padding:15px;
`;

export const BandFooter = styled.Text`
  font-size:12px;
  color:#FFF;
  text-transform:uppercase;
`;

export const Content = styled.View`
  flex:1;
  align-items:center;
  margin-top:20px;
`;

export const ButtonRandomOrder = styled.TouchableOpacity`
  background-color:#1dd15d;
  padding:18px 60px;
  border-radius:30px;
`;

export const ButtonRandomOrderText = styled.Text`
  color:#FFF;
  text-transform:uppercase;
  font-size:17px;
  font-weight:bold;
  letter-spacing:1px;
`;

export const InfoCategory = styled.Text`
    color:#FFF;
    padding:20px;
    font-size:18px;
    font-weight:bold;
`;

export const ContainerMusic = styled.ScrollView.attrs({
  showsVerticalIndicator:false,
})`
  flex:1;
  width:100%;
`;


export const Music = styled.View`
  flex-direction:row;
  height:60px;
  align-items:center;
  margin:5px 0;
  justify-content:space-between;
`

export const MusicGrouAllItens = styled.View`
  flex-direction:row;
`;

export const MusicaNumber = styled.Text`
  color:#e6e6e6;
  padding:20px;
`;

export const MusicGroupItens=  styled.View`

`;


export const MusicaName = styled.Text`
color:#FFF;
font-size:17px;
padding:5px 0;

`

export const MusicaListening = styled.Text`
font-size:14px;
color:#aaa;
`
