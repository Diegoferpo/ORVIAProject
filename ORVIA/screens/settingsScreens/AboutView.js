import React from 'react';
import { Text, ScrollView } from 'react-native';
import styles from '../../styles/settingsScreensStyles/AboutStyles';

const AboutView = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre nuestra app</Text>
      <Text style={styles.version}>Orvia v1.0.3</Text>
      <Text style={styles.text}>
        Orvia es una plataforma diseñada para ayudarte a gestionar tu salud de forma fácil y segura. Nuestra app permite llevar un control de tus citas, recibir notificaciones importantes y mantenerte informado.
      </Text>
    </ScrollView>
  );
}

export default AboutView;