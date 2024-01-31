import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App: React.FC = () => {
  const handleLoginPress = () => {
    // Handle login button press
    console.log('Login pressed');
  };

  const handleSignUpPress = () => {
    // Handle sign up button press
    console.log('Sign Up pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Realtor</Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUpPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
  },
  buttonContainer: {
    backgroundColor: '#32CD32',
    borderRadius: 25,
    height: 50,
    width: '80%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;