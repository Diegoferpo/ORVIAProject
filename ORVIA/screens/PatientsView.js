import styles from '../styles/PatientsStyle';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity, TextInput, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PatientsInfoView from './PatientsInfoView';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

const PatientsView = ({ navigation }) => {

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchPacientes = async () => {
        setLoading(true);
        try {
          const response = await fetch('http://54.237.212.176:3000/api/v1/cita');
          const data = await response.json();
  
          const mapa = new Map();
  
          data.forEach((cita) => {
            const exp = cita.expediente;
            const fechaCita = new Date(cita.fechaHora);
            const pacienteExistente = mapa.get(exp.expediente);
            if (!pacienteExistente || new Date(pacienteExistente.ultimaFecha) < fechaCita) {
              mapa.set(exp.expediente, {
                id: exp.expediente,
                name: exp.nombre,
                telefono: exp.telefono,
                telefonoEmergencia: exp.telefonoEmergencia,
                historial: exp.idHistorial,
                correo: exp.correo,
                ultimaCita: cita.motivo || 'Sin motivo',
                ultimaFecha: cita.fechaHora,
              });
            }
          });
  
          const pacientesUnicos = Array.from(mapa.values());
          setPatients(pacientesUnicos);
          setFilteredPatients(pacientesUnicos);
        } catch (error) {
          console.error('Error al cargar pacientes:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPacientes();
    }, [])
  );  

  useEffect(() => {
    const query = searchQuery.toLowerCase();

    const filtrados = patients.filter((p) =>
      p.name.toLowerCase().includes(query) ||
      p.correo?.toLowerCase().includes(query) ||
      p.telefono?.includes(query)
    );

    setFilteredPatients(filtrados);
  }, [searchQuery, patients]);

  const handlePatientPress = (patient) => {
    navigation.navigate('PatientInfo', { paciente: patient });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar paciente"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0593D3" style={{ marginTop: '10%' }} />
        ) : (
          filteredPatients.map((patient) => (
            <TouchableOpacity
              key={patient.id}
              style={styles.card}
              onPress={() => handlePatientPress(patient)}
            >
              <View style={styles.cardLeft}>
                <Icon name="user" size={28} color="#0593D3" />
              </View>
              <View style={styles.cardBody}>
                <Text style={styles.cardName}>{patient.name}</Text>
                <View style={styles.cardRow}>
                  <Icon name="phone" size={16} color="#666" style={styles.iconLeft} />
                  <Text style={styles.cardDetails}>{patient.telefono}</Text>
                </View>
                <Text style={styles.cardDetails}>{patient.ultimaCita}</Text>
              </View>
              <Icon name="chevron-right" size={22} color="#999" />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};


const Stack = createStackNavigator();

const PatientStack = () => {
  const insets = useSafeAreaInsets();

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
          fontSize: 30,
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Patients"
        component={PatientsView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientInfo"
        component={PatientsInfoView}
        options={{ title: 'Informacion de Paciente' }}
      />
    </Stack.Navigator>
  );
};

export default PatientStack;
