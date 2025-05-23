import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setDate(selectedDate);
    }
    if (Platform.OS === 'android') {
      setShow(true);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => setShow(true)}>
        <Text style={styles.text}>Seleccionar fecha: </Text> 
        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker style={styles.datePicker}
          value={date}
          mode="date"
          display={Platform.OS === 'android' ? 'spinner' : 'default'}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: '#000',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    dateText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    datePicker: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 20,
    },
  
});
