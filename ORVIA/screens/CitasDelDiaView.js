import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../styles/CitasDelDiaStyle';
import { useRoute, useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 7;

const generarRangoDias = (fechaCentral) => {
  const centro = new Date(fechaCentral);
  const dias = [];
  for (let i = -15; i <= 15; i++) {
    const nueva = new Date(centro);
    nueva.setDate(centro.getDate() + i);
    dias.push(nueva);
  }
  return dias;
};

const formatoDiaSemana = (fecha) =>
  fecha.toLocaleDateString('es-ES', { weekday: 'short' }).charAt(0).toUpperCase();

const formatoFechaCompleta = (fecha) =>
  fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

const calcularEtiquetaHoy = (fecha) => {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const objetivo = new Date(fecha);
  objetivo.setHours(0, 0, 0, 0);
  const diff = (objetivo - hoy) / (1000 * 60 * 60 * 24);
  if (diff === 0) return 'Hoy';
  if (diff > 0) return `Faltan ${diff} dias`;
  return `Hace ${Math.abs(diff)} dias`;
};

const CitasDelDiaView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const initialDate = new Date(`${route.params.date}T00:00:00`);
  const flatListRef = useRef(null);

  const [fechaSeleccionada, setFechaSeleccionada] = useState(initialDate);
  const [diasRango, setDiasRango] = useState(generarRangoDias(initialDate));
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    obtenerCitasPorFecha(fechaSeleccionada);
  }, [fechaSeleccionada]);

  const obtenerCitasPorFecha = async (fecha) => {
    try {
      const response = await fetch('http://54.237.212.176:3000/api/v1/cita');
      const data = await response.json();
      const fechaStr = fecha.toISOString().split('T')[0];

      const filtradas = data
        .filter(cita => new Date(cita.fechaHora).toISOString().split('T')[0] === fechaStr)
        .map(cita => ({
          id: cita.idCita,
          name: cita.expediente?.nombre || 'Paciente desconocido',
          reason: cita.motivo || 'Sin motivo',
          telefono: cita.expediente?.telefono || 'Sin telefono', 
          start: new Date(cita.fechaHora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          end: calcularHoraFin(cita.fechaHora, cita.duracion),
          rawDate: new Date(cita.fechaHora),
          prioridad: cita.prioridad
        }))
        .sort((a, b) => a.rawDate - b.rawDate);

      setCitas(filtradas);


      setCitas(filtradas);
    } catch (error) {
      console.error('Error al obtener citas:', error);
      setCitas([]);
    }
  };

  const obtenerColorPrioridad = (prioridad) => {
    switch (prioridad) {
      case 1:
        return '#6FCF97';
      case 2:
        return '#1E90FF'; 
      case 3:
        return '#FFA500'; 
      default:
        return '#ccc';
    }
  };  

  const calcularHoraFin = (fechaHora, duracionMin) => {
    const fecha = new Date(fechaHora);
    fecha.setMinutes(fecha.getMinutes() + (duracionMin || 0));
    return fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const onScrollEnd = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    const index = Math.round(offset / ITEM_WIDTH);
    const nuevaFecha = diasRango[index];
    setFechaSeleccionada(nuevaFecha);
    setDiasRango(generarRangoDias(nuevaFecha));

    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index: 15, animated: false });
    }, 0);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.fechaHeader}>
          <View>
            <Text style={styles.fechaNumero}>{fechaSeleccionada.getDate()}</Text>
            <Text style={styles.fechaTexto}>{formatoFechaCompleta(fechaSeleccionada)}</Text>
          </View>
          <View style={styles.estadoHoyBox}>
            <Text style={styles.estadoHoyTexto}>{calcularEtiquetaHoy(fechaSeleccionada)}</Text>
          </View>
        </View>

        <View style={styles.scrollWrapper}>
          <View style={styles.selectorFijo} pointerEvents="none"/>
          <FlatList
            ref={flatListRef}
            data={diasRango}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            snapToInterval={ITEM_WIDTH}
            decelerationRate="fast"
            onMomentumScrollEnd={onScrollEnd}
            getItemLayout={(_, index) => ({ length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index })}
            contentContainerStyle={{ paddingHorizontal: (width - ITEM_WIDTH) / 2 }}
            initialScrollIndex={15}
            renderItem={({ item }) => {
              const isSelected = item.toDateString() === fechaSeleccionada.toDateString();
              return (
                <View style={[styles.diaItem, isSelected && styles.diaSeleccionado]}>
                  <Text style={[styles.diaNumero, isSelected && styles.diaNumeroSeleccionado]}>
                    {item.getDate()}
                  </Text>
                  <Text style={[styles.diaLetra, isSelected && styles.diaNumeroSeleccionado]}>
                    {formatoDiaSemana(item)}
                  </Text>
                </View>
              );
            }}
          />
        </View>

        <FlatList
          data={citas}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listaCitas}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('InformacionView', {
                  idCita: item.id,
                })
              }
            >
              <View style={styles.citaFila}>
                <View style={styles.hora}>
                  <Text style={styles.horaInicio}>{item.start}</Text>
                  <Text style={styles.horaFin}>{item.end}</Text>
                </View>
                <View style={styles.cardCita}>
                  <View style={[styles.lineaLateral, { backgroundColor: obtenerColorPrioridad(item.prioridad) }]} />
                  <View>
                    <Text style={styles.nombre}>{item.name}</Text>
                    <Text style={styles.motivo}>Motivo: {item.reason}</Text>
                    <Text style={styles.telefono}>Contacto: {item.telefono}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CitasDelDiaView;
