import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home');
    }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={styles.innerContainer}>
        <Text style={styles.title}>Login Disini</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Username"
          placeholderTextColor="#C0C0C0"
          value={email}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Password"
          placeholderTextColor="#C0C0C0"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#ffffff22',
      color: '#FFFFFF',
      marginBottom: 15,
    },
    button: {
      width: '80%',
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#203a43',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
  });