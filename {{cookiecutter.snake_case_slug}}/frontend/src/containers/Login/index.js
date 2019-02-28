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

  // navigate to forgot password screen
  onForgotPasswordButtonPressed = () => {
    this.props.navigation.navigate('ForgotPassword');
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
            <Text style={styles.logoText}>Crowdbotics</Text>
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
                placeholder="Username"
                placeholderTextColor="#afb0d1"
                autoCapitalize="none"
                onChangeText={username => this.setState({ username })}
              />
            </Item>
            <Item
              style={styles.item}
              rounded
              last
            >
              <Input
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#afb0d1"
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
              rounded
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </Button>

            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity onPress={this.onForgotPasswordButtonPressed}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* Signup Button */}
            <View style={styles.signupContainer}>
              <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
              <TouchableOpacity onPress={this.onSignupButtonPressed}>
                <Text style={styles.signupText}>Sign Up Now.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
