import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import styles from '../styles/LoginStyle';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignupView({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

const handleSignUp = async () => {
  try {
    console.log('Auth:', Auth);
    const { user } = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email,
      },
    });
    console.log('Usuario registrado:', user);
    navigation.navigate('Confirm', { email }); 
  } catch (error) {
    console.log('Error en signUp:', error);
    Alert.alert('Registro fallido', error.message || 'Inténtalo de nuevo');
  }
};



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>Crear Cuenta</Text>

        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" autoCapitalize="none" />
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Contraseña" secureTextEntry />
        <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirma tu contraseña" secureTextEntry />

        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button1}>
          <Text style={{color: '#fff', fontSize: 18}}>Registrarse</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Text style={{ marginBottom: '10%' }}>──── Registrarse con ────</Text>
          <Ionicons name="logo-google" size={40} onPress={() => console.log('Signup with Google')} color="#1F7A8C" />
        </View>

        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          ¿Ya tienes una cuenta?{' '}
          <Text style={{ color: '#3498db', fontWeight: 'bold' }} onPress={() => navigation.navigate('SignIn')}>
            Inicia sesión
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
