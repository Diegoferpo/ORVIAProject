import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/PatientsInfoStyle';

const InfoItem = ({ icon, label, value }) => (
  <View style={styles.segmentContainer}>
    <View style={styles.itemContainer}>
      <View style={styles.iconLabelRow}>
        <Icon name={icon} size={20} color="#0593D3" style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const PatientsInfoView = ({ navigation }) => {
  const [paciente, setPaciente] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPaciente({
      nombre: 'Martintin Luna',
      expediente: 315338,
      telefono: '1234567890',
      correo: 'tintin@example.com',
      telefonoEmergencia: '9876543210',
      idHistorial: 8,
    });
  }, []);

  if (loading || !paciente) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#006D77" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Información del paciente</Text>

      <View style={styles.card}>
        <InfoItem icon="file-text" label="Expediente" value={paciente.expediente} />
        <InfoItem icon="user" label="Nombre" value={paciente.nombre} />
        <InfoItem icon="phone" label="Teléfono" value={paciente.telefono} />
        <InfoItem icon="mail" label="Correo electrónico" value={paciente.correo} />
        <InfoItem icon="alert-triangle" label="Emergencia" value={paciente.telefonoEmergencia} />
        <InfoItem icon="book" label="ID Historial" value={paciente.idHistorial} />


      </View>
    </ScrollView>
  );
}

export default PatientsInfoView;


