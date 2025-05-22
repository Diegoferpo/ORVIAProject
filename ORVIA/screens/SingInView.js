import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import styles from '../styles/LoginStyle';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginView({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await Auth.signIn(email, password);
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await Auth.forgotPassword(email);
      console.log('Correo de recuperación enviado');
    } catch (error) {
      console.error('Error al enviar correo de recuperación:', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" autoCapitalize="none" />
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Contraseña" secureTextEntry />

        <Text style={{ color: '#3498db', textAlign: 'right', marginBottom: '10%' }} onPress={handleResetPassword}>
          ¿Olvidaste tu contraseña?
        </Text>

        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button1}>
          <Text style={{color: '#fff', fontSize: 18}}>Iniciar Sesión</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Text style={{ marginBottom: '10%' }}>──── Iniciar sesión con ────</Text>
          <Ionicons name="logo-google" size={40} onPress={() => console.log('Login with Google')} color="#1F7A8C" />
        </View>

        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          ¿No tienes una cuenta?{' '}
          <Text style={{ color: '#3498db', fontWeight: 'bold' }} onPress={() => navigation.navigate('SignUp')}>
            Regístrate
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
