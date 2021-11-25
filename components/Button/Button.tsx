/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {ButtonStyle} from './Button.styles';

interface ButtonProps {
  children: string;
  onPress?: any;
  block?: boolean | undefined;
  textColor?: string;
}

const Button = ({children, onPress, block, textColor}: ButtonProps) => {
  return (
    <ButtonStyle onPress={onPress} block={block}>
      <Text style={{color: textColor, fontSize: 15, fontWeight: '900'}}>
        {children}
      </Text>
    </ButtonStyle>
  );
};

export default Button;
