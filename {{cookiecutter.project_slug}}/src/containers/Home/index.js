import React from 'react';
import {
  Container,
  Content,
  Text,
} from 'native-base';

import styles from './styles';


const Home = () => (
  <Container>
    <Content contentContainerStyle={styles.content}>
      <Text>Home</Text>
    </Content>
  </Container>
);

export default Home;
