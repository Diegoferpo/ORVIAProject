import React, { useState } from 'react';
import { View, Text, TextInput, Button, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import styles from '../styles/CreateAppointmentStyle';
import { Picker } from '@react-native-picker/picker';



const CreateAppointmentView = () => {
    const [expediente, setExpediente] = useState('');
    const [fecha, setFecha] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showDuracionPicker, setShowDuracionPicker] = useState(false);
    const [duracion, setDuracion] = useState('');
    const [motivo, setMotivo] = useState('');
    const [observaciones, setObservaciones] = useState('');
    const [comentarios, setComentarios] = useState('');

  const guardarCita = async () => {
    if (!expediente || isNaN(expediente)) {
      alert('El expediente debe ser un número válido');
      return;
    }
  
    if (!duracion || !motivo) {
      alert('Duración y motivo son obligatorios');
      return;
    }

    const nuevaCita = {
      expediente: parseInt(expediente),
      fechaHora: fecha.toISOString(),
      duracion: parseInt(duracion),
      motivo,
      observaciones,
      comentarios,
    };

    try {
      const response = await fetch('http://54.237.212.176:3000/api/v1/cita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaCita),
      });

      if (response.ok) {
        alert('Cita guardada correctamente');
        limpiarFormulario();
      } else {
        const error = await response.text();
        console.error('Error al guardar:', error);
        alert('Hubo un error al guardar la cita');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('No se pudo conectar con el servidor');
    }
  };

  const limpiarFormulario = () => {
    setExpediente('');
    setFecha(new Date());
    setDuracion('');
    setMotivo('');
    setObservaciones('');
    setComentarios('');
  };  

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFecha(selectedDate);
    }
  };

  const roundMinutes = (date) => {
    const newDate = new Date(date);
    const roundedDate = roundMinutes(selectedDate);
    
    newDate.setMonth(roundedDate.getMonth());
    newDate.setDate(roundedDate.getDate());
      setFecha(newDate);
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const newDate = new Date(fecha);
      newDate.setHours(selectedTime.getHours());
      newDate.setMinutes(selectedTime.getMinutes());
      setFecha(newDate);
    }
  };

  return (
    <GestureHandlerRootView>
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.label}>Expediente</Text>
      <TextInput
        style={styles.input}
        placeholder="Expediente del paciente"
        value={expediente}
        onChangeText={setExpediente}
      />

      <Text style={styles.label}>Fecha</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={styles.input}
          value={fecha.toLocaleDateString()}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      <Text style={styles.label}>Hora</Text>
      <TouchableOpacity onPress={() => setShowTimePicker(true)}>
        <TextInput
          style={styles.input}
          value={fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      <Text style={styles.label}>Duración (minutos)</Text>
      
        <TouchableOpacity onPress={() => setShowDuracionPicker(!showDuracionPicker)}>
        <TextInput
          style={styles.input}
          placeholder="Selecciona duración"
          value={duracion ? `${duracion} minutos` : ''}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {showDuracionPicker && (
        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, marginBottom: 10 }}>
          <Picker
            selectedValue={duracion}
            onValueChange={(itemValue) => {
              setDuracion(itemValue);
              setShowDuracionPicker(false);
            }}
          >
            <Picker.Item label="Selecciona duración" value="" />
            <Picker.Item label="20 minutos" value="15" />
            <Picker.Item label="30 minutos" value="30" />
            <Picker.Item label="45 minutos" value="45" />
            <Picker.Item label="60 minutos" value="60" />
            <Picker.Item label="90 minutos" value="90" />
          </Picker>
        </View>
      )}
        

      {showDatePicker && (
        <DateTimePicker
          value={fecha}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeDate}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={fecha}
          mode="time"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeTime}
        />
      )}
    <Text style={styles.label}>Motivo de la cita</Text>
        <TextInput
            style={styles.input}
            placeholder="Motivo de la cita"
            value={motivo}
            onChangeText={setMotivo}
        />

        <Text style={styles.label}>Observaciones previas</Text>
        <TextInput
            style={styles.input}
            placeholder="Observaciones"
            value={observaciones}
            onChangeText={setObservaciones}
        />

        <Text style={styles.label}>Comentarios</Text>
        <TextInput
            style={styles.input}
            placeholder="Comentarios"
            value={comentarios}
            onChangeText={setComentarios}
        />

        <TouchableOpacity style={styles.button} onPress={guardarCita}>
            <Text style={styles.buttonText}>Guardar cita</Text>
        </TouchableOpacity>
    </ScrollView>
    </GestureHandlerRootView>
    );
}

export default CreateAppointmentView;
