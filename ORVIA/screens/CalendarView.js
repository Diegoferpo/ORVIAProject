import React, { useState } from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from '../styles/CalendarStyle';
import CitasDelDiaView from './CitasDelDiaView';
import InformacionView from './InformacionView';

const today = new Date().toLocaleDateString('en-CA');

const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(today);

  const appointments = {
    '2025-03-12': [
      { id: '1', name: 'Emmanuel Moscoso Aquino', time: '08:00' },
      { id: '2', name: 'Martin Luna Rogel', time: '09:25' },
      { id: '3', name: 'Diego F. Portillo Bibiano', time: '10:50' },
    ],
    '2025-05-13': [
      { id: '4', name: 'Paciente Prueba 1', time: '07:00' },
      { id: '5', name: 'Paciente Prueba 2', time: '08:30' },
      { id: '6', name: 'Paciente Prueba 3', time: '10:00' },
      { id: '7', name: 'Paciente Prueba 4', time: '11:30' },
    ],
  };

  const handleDayPress = (day) => {
    if (selectedDate === day.dateString) {
      navigation.navigate('CitasDelDia', { date: selectedDate });
    } else {
      setSelectedDate(day.dateString);
    }
  };

  const citas = appointments[selectedDate] || [];

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
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
        data={citas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
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
          height: Platform.OS === 'android' ? 80 : undefined,
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
        options={{ title: 'Citas del Día' }}
      />
      <Stack.Screen
        name="InformacionView"
        component={InformacionView}
        options={{ title: 'Mas Información' }}
      />
    </Stack.Navigator>
  );
};

export default CalendarStack;
