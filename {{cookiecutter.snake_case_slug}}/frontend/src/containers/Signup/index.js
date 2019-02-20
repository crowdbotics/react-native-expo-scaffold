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
    confirmPassword: '',
  };

  // navigate to login screen after a successful signup
  onSignupButtonPressed = () => {
    // TODO: Login

    this.props.navigation.navigate('Login');
  }

  // navigate to login screen
  onLoginButtonPressed = () => {
    this.props.navigation.navigate('Login');
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
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                secureTextEntry
              />
            </Item>
          </Form>

          <View style={styles.buttonContainer}>
            {/* Signup Button */}
            <Button
              style={styles.button}
              onPress={this.onSignupButtonPressed}
              hasText
              block
              large
              dark
            >
              <Text style={styles.buttonText}>SIGNUP</Text>
            </Button>

            {/* Login Button */}
            <Button
              style={styles.button}
              onPress={this.onLoginButtonPressed}
              hasText
              block
              primary
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Signup;
