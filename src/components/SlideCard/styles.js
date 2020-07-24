import styled from "styled-components";

export const Container = styled.View`
  padding:5px 20px;
`;

export const Title = styled.Text`
  color:#FFF;
  font-size:22px;
  font-weight:bold;
`;

export const SlideSroll = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator:false,
  horizontal:true
})``