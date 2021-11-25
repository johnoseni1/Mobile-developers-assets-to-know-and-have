import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const {height} = Dimensions.get('window');

export const Container = styled(LinearGradient).attrs({
  colors: ['#0000ff', '#00008B'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  height: ${height}px;
`;

export const TopView = styled.View`
  margin: 20px;
  height: 60px;
  width: 60px;
  background-color: #cdffb6;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  border-radius: 50px;
  padding: 0;
`;
