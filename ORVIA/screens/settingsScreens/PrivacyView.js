import React from 'react';
import { Text, ScrollView,  } from 'react-native';
import styles from '../../styles/settingsScreensStyles/PrivacyStyle';

const PrivacyView = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aviso de privacidad</Text>
      <Text style={styles.text}>
        En Orvia respetamos tu privacidad. Esta app recopila datos únicamente para mejorar tu experiencia y cumplir con requerimientos legales.
      </Text>
      <Text style={styles.text}>
        Puedes ejercer tus derechos de acceso, rectificación y cancelación escribiéndonos a privacidad@orvia.com.
      </Text>
    </ScrollView>
  );
}

export default PrivacyView;