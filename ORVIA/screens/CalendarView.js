import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Platform, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from '../styles/CalendarStyle';
import CitasDelDiaView from './CitasDelDiaView';
import InformacionView from './InformacionView';
  
const localToday = new Date();
const today = `${localToday.getFullYear()}-${String(localToday.getMonth() + 1).padStart(2, '0')}-${String(localToday.getDate()).padStart(2, '0')}`;

const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(today);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments(selectedDate);
  }, [selectedDate]);

  const fetchAppointments = async (date) => {
    try {
      const response = await fetch('http://54.237.212.176:3000/api/v1/cita');
      const data = await response.json();

      const citasFiltradas = data.filter(cita => {
        const fecha = new Date(cita.fechaHora).toISOString().split('T')[0];
        return fecha === date;
      });

      const citasMapeadas = citasFiltradas.map(cita => ({
        id: cita.idCita,
        name: cita.expediente?.nombre || 'Paciente desconocido',
        time: new Date(cita.fechaHora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }));

      setAppointments(citasMapeadas);
    } catch (error) {
      console.error('Error al obtener las citas:', error);
      setAppointments([]);
    }
  };

  const handleDayPress = (day) => {
    if (selectedDate === day.dateString) {
      navigation.navigate('CitasDelDia', { date: selectedDate });
    } else {
      setSelectedDate(day.dateString);
    }
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    const fecha = new Date(Number(year), Number(month) - 1, Number(day)); // sin zona horaria
    return fecha.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={today}
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#00566B',
            selectedTextColor: '#fff',
          },
        }}
        theme={{
          calendarBackground: '#fff',
          textSectionTitleColor: '#000',
          selectedDayTextColor: '#fff',
          todayTextColor: '#00566B',
          dayTextColor: '#000',
          arrowColor: '#00566B',
          monthTextColor: '#000',
          textDayFontWeight: '400',
          textMonthFontWeight: 'bold',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
        style={styles.calendar}
      />

      <View style={styles.divider} />
      <Text style={styles.dateTitle}>{formatDate(selectedDate)}</Text>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('InformacionView', {
                idCita: item.id,
              })
            }
          >
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.scrollArea}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const Stack = createStackNavigator();

export const CalendarStack = () => {
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
        name="CalendarioPrincipal"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CitasDelDia"
        component={CitasDelDiaView}
        options={{ title: 'Citas del Dia' }}
      />
      <Stack.Screen
        name="InformacionView"
        component={InformacionView}
        options={{ title: 'Informacion de la cita' }}
      />
    </Stack.Navigator>
  );
};

export default CalendarStack;
