import { useEffect, useState, useRef } from 'react';
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
  if (diff > 0) return `Faltan ${diff} días`;
  return `Hace ${Math.abs(diff)} días`;
};

const citasEjemplo = {
  '2025-05-13': [
    {
      id: '1', name: 'Emmanuel Moscoso Aquino', reason: 'Dolor persistente tras cirugía de ligamentos', treatment: 'Rehabilitación de rodilla', start: '08:00', end: '09:15'
    },
    {
      id: '2', name: 'Emmanuel Moscoso Aquino', reason: 'Dolor persistente tras cirugía de ligamentos', treatment: 'Rehabilitación de rodilla', start: '09:25', end: '10:40'
    },
  ],
};

const CitasDelDiaView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const initialDate = new Date(`${route.params.date}T00:00:00`);
  const flatListRef = useRef(null);

  const [fechaSeleccionada, setFechaSeleccionada] = useState(initialDate);
  const [diasRango, setDiasRango] = useState(generarRangoDias(initialDate));

  const onScrollEnd = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    const index = Math.round(offset / ITEM_WIDTH);
    const nuevaFecha = diasRango[index];
    setFechaSeleccionada(nuevaFecha);

    const nuevosDias = generarRangoDias(nuevaFecha);
    setDiasRango(nuevosDias);

    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index: 15, animated: false });
    }, 0);
  };

  const citas = citasEjemplo[fechaSeleccionada.toISOString().split('T')[0]] || [];

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
          <View style={styles.selectorFijo} />
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
                  cita: {
                    name: item.name,
                    start: item.start,
                    date: fechaSeleccionada.toISOString().split('T')[0],
                  },
                })
              }
            >
              <View style={styles.citaFila}>
                <View style={styles.hora}>
                  <Text style={styles.horaInicio}>{item.start}</Text>
                  <Text style={styles.horaFin}>{item.end}</Text>
                </View>
                <View style={styles.cardCita}>
                  <View style={styles.lineaLateral} />
                  <View>
                    <Text style={styles.nombre}>{item.name}</Text>
                    <Text style={styles.tratamiento}>{item.treatment}</Text>
                    <Text style={styles.motivo}>{item.reason}</Text>
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
