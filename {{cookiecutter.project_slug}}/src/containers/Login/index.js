import React, { Component } from 'react';
import {
  Button,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
} from 'native-base';
import { View } from 'react-native';

import styles from './styles';


class Signup extends Component {
  state = {
    username: '',
    password: '',
  };

  // navigate to home after a successful login
  onLoginButtonPressed = () => {
    // TODO: Login

    this.props.navigation.navigate('Home');
  }

  // navigate to signup screen
  onSignupButtonPressed = () => {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          {/* Form */}
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={username => this.setState({ username })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={password => this.setState({ password })}
                secureTextEntry
              />
            </Item>
          </Form>

          <View style={styles.buttonContainer}>
            {/* Login Button */}
            <Button
              style={styles.button}
              onPress={this.onLoginButtonPressed}
              hasText
              block
              large
              dark
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </Button>

            {/* Signup Button */}
            <Button
              style={styles.button}
              onPress={this.onSignupButtonPressed}
              hasText
              block
              primary
            >
              <Text style={styles.buttonText}>SIGNUP</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Signup;
