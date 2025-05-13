import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from 'react';


import HomeView from './screens/HomeView';
import CalendarView from './screens/CalendarView';
import PatientsView from './screens/PatientsView';
import ProfileView from './screens/ProfileView';
import CreateAppointment from './screens/CreateAppointmentView';
import styles from './styles/AppStyle';
import StatusBarCustom from './components/Header';
import Navbar from './components/Navbar';

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCd1iI8W6IjP2p0dsynG8TgsP1sIVdfSm4",
  authDomain: "orvia-78bf3.firebaseapp.com",
  projectId: "orvia-78bf3",
  storageBucket: "orvia-78bf3.appspot.com",
  messagingSenderId: "862154058729",
  appId: "1:862154058729:web:afac45c243c60a28b33978",
  measurementId: "G-FZG8CFXC1W"
};

const app = initializeApp(firebaseConfig);

const AuthScreen = ({ email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, isLogin, setIsLogin, handleAuthentication, handleResetPassword }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
      />

      {isLogin && (
        <Text
          style={{ color: '#3498db', textAlign: 'right', marginBottom: '10%' }}
          onPress={handleResetPassword}
        >
          ¿Olvidaste tu contraseña?
        </Text>
      )}

      {!isLogin && (
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirma tu contraseña"
          secureTextEntry
        />
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleAuthentication}
          style={styles.button1}
        >
          <Text style={{color: '#fff', fontSize: 18}}>{title=isLogin ? 'Iniciar Sesión' : 'Registrarse'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
      <Text style={{ marginBottom: '10%' }}>────  {isLogin ? 'Iniciar sesión con' : 'Registrarse con'}  ────</Text>

        <Ionicons
          name="logo-google"
          size={40}
          onPress={() => console.log('Login with Google')}
          color="#1F7A8C"
        />
      </View>

      <View>
        <Text style={{ textAlign: 'center' }}>
          {isLogin ? '¿No tienes una cuenta? ' : '¿Ya tienes una cuenta? '}
          <Text
            style={{ color: '#3498db', fontWeight: 'bold' }}
            onPress={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return (
    <NavigationContainer>
      <StatusBarCustom backgroundColor="#022B3A" style="light" />

      <Tab.Navigator 
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#022B3A', 
            height: Platform.OS === 'android' ? 80 : 80,},

          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 32},
          headerBackVisible: false,
        }}
        tabBar={(props) => <Navbar {...props} />}
      >
        <Tab.Screen name="Inicio" component={HomeView} />
        <Tab.Screen name="Calendario" component={CalendarView} />
        <Tab.Screen name="Agendar Cita" component={CreateAppointment} />
        <Tab.Screen name="Pacientes" component={PatientsView} />
        <Tab.Screen name="Perfil" component={ProfileView} />
      </Tab.Navigator>

    </NavigationContainer>
  );
};

const handleResetPassword = async () => {
  if (!email) {
    console.error('Por favor ingresa tu correo electrónico para recuperar la contraseña.');
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Se ha enviado un correo para restablecer tu contraseña.');
  } catch (error) {
    console.error('Error al enviar el correo de recuperación:', error.message);
  }
};

export default App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        if (isLogin) {
          // Login
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
        } else {
          // Registro
          if (password !== confirmPassword) {
            console.error('Las contraseñas no coinciden.');
            return;
          }
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    user ? (
      <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
    ) : (
      <ScrollView contentContainerStyle={styles.container}>
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
          handleResetPassword={handleResetPassword}
        />
      </ScrollView>
    )
  );
};
