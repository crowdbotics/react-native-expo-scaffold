import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
} from 'native-base';

import styles from './styles';

class Login extends Component {
  state = {
    email: '',
  };

  // navigate to home after request of forgot password
  onForgotPasswordButtonPressed = () => {
    // TODO: Forgot Password

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
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/icon.png')}
            />
            <Text style={styles.logoText}>Forgot Password?</Text>
          </View>

          {/* Form */}
          <Form style={styles.form}>
            <Item
              style={styles.item}
              rounded
              last
            >
              <Input
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#afb0d1"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Text style={styles.resetInstructionsText}>
              Enter your email below to receive your password reset instructions.
            </Text>
          </Form>

          <View style={styles.buttonContainer}>
            {/* Login Button */}
            <Button
              style={styles.button}
              onPress={this.onForgotPasswordButtonPressed}
              hasText
              block
              large
              dark
              rounded
            >
              <Text style={styles.sendText}>SEND</Text>
            </Button>

            {/* Signup Button */}
            <View style={styles.loginContainer}>
              <Text style={styles.rememberAccountText}>Remember your account?</Text>
              <TouchableOpacity onPress={this.onLoginButtonPressed}>
                <Text style={styles.loginText}>Login Now.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
