import React from 'react';
import { Text, ScrollView } from 'react-native';
import styles from '../../styles/settingsScreensStyles/HelpStyles';


const HelpView = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ayuda y soporte</Text>
      <Text style={styles.text}>Si necesitas asistencia, contáctanos:</Text>
      <Text style={styles.text}>📧 soporte@orvia.com</Text>
      <Text style={styles.text}>📱 +52 442 345 6789 </Text>
      <Text style={styles.text}>También puedes usar el formulario de contacto desde nuestra web.</Text>
    </ScrollView>
  );
}

export default HelpView;