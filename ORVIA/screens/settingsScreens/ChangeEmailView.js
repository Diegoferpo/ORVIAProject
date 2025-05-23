import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../../styles/settingsScreensStyles/FormScreensStyle';


const ChangeEmailView = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSave = () => {
    if (!email.includes('@')) {
      Alert.alert('Error', 'Introduce un correo electrónico válido.');
      return;
    }

    // Lógica de actualización aquí
    Alert.alert('Éxito', 'Correo electrónico actualizado.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambiar correo electrónico</Text>

      <TextInput
        style={styles.input}
        placeholder="Nuevo correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeEmailView;
