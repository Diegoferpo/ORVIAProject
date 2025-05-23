import React from 'react';
import {Text, ScrollView } from 'react-native';
import styles from '../../styles/settingsScreensStyles/FAQStyle';

const FAQView = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Preguntas frecuentes</Text>
      <Text style={styles.question}>¿Cómo cambio mi contraseña?</Text>
      <Text style={styles.answer}>Desde el perfil, selecciona 'Mi cuenta' y luego 'Cambiar contraseña'.</Text>

      <Text style={styles.question}>¿Cómo cambio mi información?</Text>
      <Text style={styles.answer}>Desde el perfil, selecciona el icono de editar a un costado de tu nombre.</Text>

      <Text style={styles.question}>¿Qué hago si no recibo notificaciones?</Text>
      <Text style={styles.answer}>Revisa los permisos de la app desde los ajustes de tu teléfono.</Text>

      <Text style={styles.question}>¿Cómo contacto al soporte?</Text>
      <Text style={styles.answer}>Puedes enviar un correo a soporte@orvia.com.</Text>
    </ScrollView>
  );
}

export default FAQView;