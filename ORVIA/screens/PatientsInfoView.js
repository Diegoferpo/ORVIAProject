import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/PatientsInfoStyle';
import { useRoute } from '@react-navigation/native';

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

  const route = useRoute();

  useEffect(() => {
    const { paciente } = route.params;
    setPaciente(paciente);
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
        <InfoItem icon={"user"} label="Nombre" value={paciente?.name || 'No disponible'} />
        <InfoItem icon={"file-text"} label="Expediente" value={paciente?.id?.toString() || 'No disponible'} />
        <InfoItem icon={"mail"} label="Correo" value={paciente?.correo || 'No disponible'} />
        <InfoItem icon={"phone"} label="Teléfono" value={paciente?.telefono || 'No disponible'} />
        <InfoItem icon={"alert-triangle"} label="Teléfono de emergencia" value={paciente?.telefonoEmergencia || 'No disponible'} />
        <InfoItem icon={"book"} label="ID Historial" value={paciente?.historial?.toString() || 'No disponible'} />
      </View>
    </ScrollView>
  );
}

export default PatientsInfoView;