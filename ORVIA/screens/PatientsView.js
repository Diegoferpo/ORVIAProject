import styles from '../styles/PatientsStyle';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PatientScreen = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de llamada a una API
    setTimeout(() => {
      const fakeData = [
        { id: '1', name: 'Laura Gutiérrez', age: 32, condition: 'Rehabilitación de rodilla' },
        { id: '2', name: 'Carlos Méndez', age: 45, condition: 'Dolor lumbar crónico' },
        { id: '3', name: 'Ana López', age: 27, condition: 'Recuperación post operatoria' },
      ];
      setPatients(fakeData);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}> 
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {loading ? (
          <ActivityIndicator size="large" color="#0593D3" style={{ marginTop: '10%' }} />
        ) : (
          patients.map((patient) => (
            <TouchableOpacity key={patient.id} style={styles.card}>
              <View style={styles.cardLeft}>
                <Icon name="user" size={28} color="#0593D3" />
              </View>
              <View style={styles.cardBody}>
                <Text style={styles.cardName}>{patient.name}</Text>
                <Text style={styles.cardDetails}>Edad: {patient.age}</Text>
                <Text style={styles.cardDetails}>{patient.condition}</Text>
              </View>
              <Icon name="chevron-right" size={22} color="#999" />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

    </View>
  );
};

export default PatientScreen;