import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation';

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10
  },
  button: {
    backgroundColor: 'tomato',
    padding: 15,
    marginBottom: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
})

const startMainApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'First',
        screen: 'rnn.firstTab',
        icon: require('./images/tab-home.png'),
        selectedIcon: require('./images/tab-home-active.png')
      },
      {
        label: 'Second',
        screen: 'rnn.secondTab',
        icon: require('./images/tab-inbox.png'),
        selectedIcon: require('./images/tab-inbox-active.png')
      }
    ]
  })
}

class LoginScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  register = () => {
    this.props.navigator.push({
      screen: 'rnn.registerScreen'
    })
  }

  startApp = () => {
    startMainApp()
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>LoginScreen</Text>
        <TouchableOpacity style={styles.button} onPress={this.register}>
          <Text style={styles.buttonText}>Go to Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.startApp}>
          <Text style={styles.buttonText}>Go to Main App</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class RegisterScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  logIn = () => {
    this.props.navigator.pop()
  }

  startApp = () => {
    startMainApp()
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>RegisterScreen</Text>
        <TouchableOpacity style={styles.button} onPress={this.logIn}>
          <Text style={styles.buttonText}>Back to Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.startApp}>
          <Text style={styles.buttonText}>Go to Main App</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class FirstTab extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  logIn = () => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'rnn.loginScreen'
      },
      animationType: 'none'
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>FirstTab</Text>
        <TouchableOpacity style={styles.button} onPress={this.logIn}>
          <Text style={styles.buttonText}>Back to Log In</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class SecondTab extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  render() {
    return (
      <Text style={styles.header}>SecondTab</Text>
    )
  }
}

const registerScreens = () => {
  Navigation.registerComponent('rnn.loginScreen', () => LoginScreen)
  Navigation.registerComponent('rnn.registerScreen', () => RegisterScreen)
  Navigation.registerComponent('rnn.firstTab', () => FirstTab)
  Navigation.registerComponent('rnn.secondTab', () => SecondTab)
}

export {
  registerScreens
}
