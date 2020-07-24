import styled from "styled-components";

export const Container = styled.View`
  height:80px;
  background-color:#333;
  border-top-color:#000;
  border-top-width:2px;
  justify-content:center;
  align-items:center;
`;

export const SubContainer = styled.View`
  height:60px;
  flex-direction:row;
  
`;

export const GroupAction = styled.View`
  justify-content:center;
  align-items:center;
  flex:1;
`;

export const ActionName = styled.Text`
  color:#FFF;
  font-size:11px;
  padding:5px;
`;