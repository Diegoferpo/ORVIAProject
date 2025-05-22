import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../styles/InformacionStyle';
import { useRoute } from '@react-navigation/native';

const formatoFechaCompleta = (fecha) =>
  fecha.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const InformacionView = () => {
  const route = useRoute();
  const { idCita } = route.params;

  const [cita, setCita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCita = async () => {
      try {
        const response = await fetch('http://54.237.212.176:3000/api/v1/cita');
        const data = await response.json();
        const encontrada = data.find(c => c.idCita.toString() === idCita.toString());
        setCita(encontrada);
      } catch (error) {
        console.error('Error al obtener la cita:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCita();
  }, [idCita]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007E8F" />
      </View>
    );
  }

  if (!cita) {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ color: '#900' }}>Cita no encontrada.</Text>
      </View>
    );
  }

  const fechaISO = cita.fechaHora.split('T')[0];
  const fecha = new Date(fechaISO + 'T00:00:00');
  const nombre = cita.expediente?.nombre || 'Paciente';
  const hora = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.fechaHeader}>
          <View>
            <Text style={styles.fechaNumero}>{fecha.getDate()}</Text>
            <Text style={styles.fechaTexto}>{formatoFechaCompleta(fecha)}</Text>
          </View>
          <View style={styles.horaBox}>
            <Text style={styles.horaTexto}>{hora}</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.nombre}>{nombre}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Asunto</Text>
          <Text style={styles.valor}>{cita.motivo || 'No especificado'}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Duración</Text>
          <Text style={styles.valor}>{cita.duracion} minutos</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Observaciones previas</Text>
          <Text style={styles.valor}>{cita.observaciones || 'Sin observaciones'}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Comentarios</Text>
          <Text style={styles.valor}>{cita.comentarios || 'Ninguno'}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Correo de contacto</Text>
          <Text style={styles.valor}>{cita.expediente?.correo || 'No disponible'}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Telefono</Text>
          <Text style={styles.valor}>{cita.expediente?.telefono || 'No disponible'}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Telefono de emergencia</Text>
          <Text style={styles.valor}>{cita.expediente?.telefonoEmergencia || 'No disponible'}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default InformacionView;
