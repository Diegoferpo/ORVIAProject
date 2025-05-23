import React, {useState} from 'react';
import { Text, ScrollView, TextInput, Button, Alert } from 'react-native';
import styles from '../../styles/settingsScreensStyles/ReportProblemStyle';


const ReportProblemView = ({navigation}) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = () => {
    if (!titulo || !descripcion) {
      Alert.alert('Campos incompletos', 'Por favor completa todos los campos.');
      return;
    }

    // Aquí iría el envío al correo pero pues lo dejamos asi jajaja
    Alert.alert('Enviado', 'Tu reporte ha sido enviado con éxito. ¡Gracias!');
    setTitulo('');
    setDescripcion('');
    console.log('Reporte enviado');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Reportar un error</Text>

      <Text style={styles.label}>Título del problema</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: No puedo iniciar sesión"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe el error con detalle..."
        multiline
        numberOfLines={5}
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <Button title="Enviar reporte" onPress={handleSubmit} />
    </ScrollView>
  );
}

export default ReportProblemView;