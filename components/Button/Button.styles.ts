import styled from 'styled-components/native';

export const ButtonStyle = styled.TouchableOpacity<{
  block: boolean | undefined;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  background-color: ${p => (p.block ? '#0bce83' : '#fff0')};
  padding: 15px;
  margin: 5px;
  border-radius: 5px;
`;
