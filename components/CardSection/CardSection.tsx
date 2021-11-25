import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Alert} from 'react-native';

import {
  BottomTap,
  CardSectionContainer,
  IconDiv,
  Paragraph,
  Title,
} from './CardSection.styles';
import Button from '../Button/Button';

interface CardSectionProps {
  paragraphText: string;
  titleText: string;
}

function CardSection(props: CardSectionProps) {
  const {titleText, paragraphText} = props;
  return (
    <CardSectionContainer>
      <BottomTap>
        <IconDiv>
          <Icon name="rocket" size={30} color="#900" />
        </IconDiv>
        <Title>{titleText}</Title>
        <Paragraph>{paragraphText}</Paragraph>
        <Button
          block
          onPress={() => Alert.alert('You just ordered!')}
          textColor="#fff">
          ORDER NOW
        </Button>
        <Button
          onPress={() => Alert.alert('You just Dismissed')}
          textColor="#000">
          DISMISS
        </Button>
      </BottomTap>
    </CardSectionContainer>
  );
}

export default CardSection;
