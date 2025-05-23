import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../../styles/settingsScreensStyles/FormScreensStyle';


const ChangePhoneView = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    if (!/^\d{10}$/.test(phone)) {
      Alert.alert('Error', 'Introduce un número de 10 dígitos.');
      return;
    }

    // Lógica de actualización aquí
    Alert.alert('Éxito', 'Número de teléfono actualizado.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambiar número de teléfono</Text>

      <TextInput
        style={styles.input}
        placeholder="Nuevo número"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        maxLength={10}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePhoneView;
