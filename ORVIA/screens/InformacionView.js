import React from 'react';
import { View, Text, ScrollView } from 'react-native';
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
  const { cita } = route.params;

  const fecha = new Date(`${cita.date}T00:00:00`);
  const hora = cita.start;

  const defaultData = {
    treatment: 'Rehabilitación de rodilla',
    duration: 75,
    reason: 'Dolor persistente tras cirugía de ligamentos',
    therapist: 'Emmet L.',
    prevNotes: 'Mejoría en la movilidad, pero sigue con inflamación.',
    comments: 'Evaluar progreso en flexión y extensión; posible ajuste en terapia según respuesta del paciente.',
  };

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

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.nombre}>{cita.name}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Asunto</Text>
          <Text style={styles.valor}>{defaultData.treatment}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Duración</Text>
          <Text style={styles.valor}>{defaultData.duration} minutos.</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Motivo de la cita</Text>
          <Text style={styles.valor}>{defaultData.reason}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Fisioterapeuta</Text>
          <Text style={styles.valor}>{defaultData.therapist}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Observaciones previas</Text>
          <Text style={styles.valor}>{defaultData.prevNotes}</Text>

          <View style={styles.linea} />

          <Text style={styles.etiqueta}>Comentarios</Text>
          <Text style={styles.valor}>{defaultData.comments}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default InformacionView;
