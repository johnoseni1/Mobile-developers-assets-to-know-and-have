import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const CardSectionContainer = styled.View`
  background-color: #f6f5f5;
  height: ${height * 0.7}px;
  width: ${width}px;
  position: absolute;
  bottom: 0px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const BottomTap = styled.View`
  position: absolute;
  bottom: 10px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
export const Paragraph = styled.Text`
  text-align: center;
  margin: 20px 0 50px;
  font-size: 20px;
  color: grey;
`;

export const Title = styled.Text`
  text-align: center;
  margin: 20px 0 10px;
  font-size: 45px;
  font-weight: 900;
`;

export const IconDiv = styled.View`
  background-color: #fff;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  text-align: center;
  border-radius: 50px;
`;
