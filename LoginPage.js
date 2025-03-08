import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function LoginPage({ onLogin, switchToRegister }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'egemen@gmail.com' && password === '12345') {
      onLogin();
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NOKTA</Text>
      <Text style={styles.title}>{isLogin ? 'Welcome Back!' : 'Create Account'}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.switchButton}
        onPress={switchToRegister}
      >
        <Text style={styles.switchButtonText}>Create Account</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 8,
    letterSpacing: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 32,
    color: '#666666',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
  button: {
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  switchButton: {
    marginTop: 16,
  },
  switchButtonText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  }
});