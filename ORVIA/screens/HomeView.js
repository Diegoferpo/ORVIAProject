import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/HomeStyle';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import InformacionView from './InformacionView';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const HomeView = () => {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const fetchCitas = async () => {
        setLoading(true);
        try {
          const response = await fetch('http://54.237.212.176:3000/api/v1/cita');
          const data = await response.json();
  
          const hoy = new Date();
          const hoyStr = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
  
          const citasHoy = data
            .filter(cita => {
              const fecha = new Date(cita.fechaHora);
              const citaStr = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`;
              return citaStr === hoyStr;
            })
            .sort((a, b) => new Date(a.fechaHora) - new Date(b.fechaHora)) // 👈 Aquí se ordenan
            .map(cita => ({
              id: cita.idCita,
              nombre: cita.expediente?.nombre || 'Paciente',
              fecha: cita.fechaHora,
              prioridad: cita.prioridad,
            }));

  
          setCitas(citasHoy);
        } catch (error) {
          console.error('Error al cargar citas:', error);
          setCitas([]);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCitas();
    }, [])
  );

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return new Intl.DateTimeFormat('es-MX', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(fecha);
  };

  const obtenerColorPrioridad = (prioridad) => {
    switch (prioridad) {
      case 1: return '#6FCF97';
      case 2: return '#1E90FF';
      case 3: return '#FFA500'; 
      default: return '#ccc';   
    }
  };  

  const renderItem = ({ item }) => {
    const fechaFormateada = formatearFecha(item.fecha);

    return (
      <TouchableOpacity onPress={() => navigation.navigate('InformacionView', {idCita: item.id})}>
        <View style={styles.card}>
          <View style={{backgroundColor: '#1F7A8C', width:10, height: '100%'}}><Text></Text></View>
          <View style={{flex: 1}}>
              <View style={styles.timeContainer}>
                  <Text style={styles.fecha}>Fecha & Hora - {fechaFormateada}</Text>
              </View>
              <View style={styles.patientContainer}>
                  <View style={styles.iconContainer}>
                      <Icon name="user" size={26} color="#0593D3" />
                  </View>

                  <Text style={styles.nombre}>{item.nombre}</Text>
              </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
    <View style={styles.boxBienvenida}>
      <Text style={styles.bienvenida}>HOLA,</Text>
      <Text style={styles.bienvenida}>BIENVENIDO A ORVIA!</Text>
    </View>
      <Text style={styles.subtitulo}>Citas de Hoy:</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={citas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.lista}
        />
      )}
    </View>
  );
};

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#022B3A',
          height: Platform.OS === 'android' ? 80 : 80,
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="HomeView"
        component={HomeView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InformacionView"
        component={InformacionView}
        options={{ title: 'Detalles de la Cita' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

