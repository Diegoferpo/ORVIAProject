import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Switch, Button, ScrollView, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import styles from '../../styles/settingsScreensStyles/NotificationStyle';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowList: true, 
  }),
});

const NotificationView = ({ navigation }) => {
  const [notificacionesGenerales, setNotificacionesGenerales] = useState(true);
  const [notificacionesEmail, setNotificacionesEmail] = useState(false);
  const [notificacionesPush, setNotificacionesPush] = useState(true);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // Solicita permisos al cargar
    registerForPushNotificationsAsync();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('📩 Notificación recibida:', notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('📬 Usuario tocó la notificación:', response);
    });

    // Ejemplo automático después de 10 segundos
    const timer = setTimeout(() => {
      schedulePushNotification();
    }, 10000);

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
      clearTimeout(timer);
    };
  }, []);

  // Función para enviar notificación push
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Nueva notificación',
        body: 'Tienes una nueva cita programada',
        sound: 'default',
      },
      trigger: null,
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Notificaciones</Text>

        <View style={styles.opcion}>
          <Text style={styles.texto}>Notificaciones generales</Text>
          <Switch
            value={notificacionesGenerales}
            onValueChange={setNotificacionesGenerales}
          />
        </View>

        <View style={styles.opcion}>
          <Text style={styles.texto}>Notificaciones por correo</Text>
          <Switch
            value={notificacionesEmail}
            onValueChange={setNotificacionesEmail}
          />
        </View>

        <View style={styles.opcion}>
          <Text style={styles.texto}>Notificaciones push</Text>
          <Switch
            value={notificacionesPush}
            onValueChange={setNotificacionesPush}
          />
        </View>

        <View style={styles.botonContainer}>
          <Button
            title="Mostrar ejemplo"
            onPress={schedulePushNotification}
            color="#007C91"
          />
        </View>
      </ScrollView>
    </View>
  );
};

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('¡Permiso para notificaciones denegado!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token);
  } else {
    alert('Debes usar un dispositivo físico para probar las notificaciones push');
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.DEFAULT,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#007C91',
    });
  }

  return token;
}

export default NotificationView;
