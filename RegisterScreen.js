// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from './firebase'; // Import your Firebase configuration

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // If successful, navigate to the task list screen or any other screen
      navigation.navigate('TaskList');
    } catch (error) {
      console.error('Registration Error:', error.message);
      // Handle registration error (e.g., show an error message)
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
