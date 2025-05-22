import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/HomeStyle';

const HomeView = () => {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCitas = async () => {
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
          .map(cita => ({
            id: cita.idCita,
            nombre: cita.expediente?.nombre || 'Paciente',
            fecha: cita.fechaHora,
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
  }, []);

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return new Intl.DateTimeFormat('es-MX', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(fecha);
  };

  const renderItem = ({ item }) => {
    const fechaFormateada = formatearFecha(item.fecha);

    return (
      <View style={styles.card}>
        <View style={{backgroundColor: '#1F7A8C', width:10, height: '100%'}}><Text></Text></View>
        <View style={{flex: 1}}>
            <View style={styles.timeContainer}>
                <Text style={styles.fecha}>Fecha & Hora - {fechaFormateada}</Text>
            </View>
            
            <View style={styles.patientContainer}>
                <View style={styles.iconContainer}>
                    <Ionicons name="person" size={26} color="#000" />
                </View>

                <Text style={styles.nombre}>{item.nombre}</Text>
            </View>
        </View>
      </View>
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
export default HomeView;

