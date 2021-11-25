/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import CardSection from '../../components/CardSection/CardSection';
import {Container, TopView} from './HomeScreen.styles';

function HomeScreen() {
  const paragraphText: string =
    'When placing an order, select the option "Contactless delivery" and the courier will leave your order at the door';
  const titleText: string = 'Non-Contact Deliveries';
  return (
    <Container>
      <TopView>
        <Text
          style={{
            fontFamily: 'Yellowtail-Regular',
            fontSize: 30,
            padding: 0,
            margin: 0,
          }}>
          D
        </Text>
      </TopView>
      <CardSection paragraphText={paragraphText} titleText={titleText} />
    </Container>
  );
}

export default HomeScreen;
