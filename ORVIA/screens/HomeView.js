import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/HomeStyle';

const HomeView = () => {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de llamada a una API
    setTimeout(() => {
      const fakeCitas = [
        {
          id: '1',
          nombre: 'Diego Portillo Bibiano',
          fecha: '2025-03-12T14:00:00',
        },
        {
          id: '2',
          nombre: 'Emmanuel Moscoso Aquino',
          fecha: '2025-03-12T15:00:00',
        },
        {
          id: '3',
          nombre: 'Laura Gutiérrez',
          fecha: '2025-06-20T11:00:00',
        },
      ];
      setCitas(fakeCitas);
      setLoading(false);
    }, 1500);
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

