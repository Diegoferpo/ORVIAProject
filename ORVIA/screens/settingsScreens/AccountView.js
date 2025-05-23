import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/settingsScreensStyles/AccountStyle';

const AccountSettingsView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>

        <Text style={styles.sectionTitle}>Mi cuenta</Text>
        <View style={styles.section}>
          <SettingItem
            icon="lock"
            label="Cambiar contraseña"
            subtitle="Actualiza tu contraseña"
            onPress={() => navigation.navigate('ChangePassword')}
          />
          <SettingItem
            icon="mail"
            label="Cambiar correo electrónico"
            subtitle="Actualiza tu correo"
            onPress={() => navigation.navigate('ChangeEmail')}
          />
          <SettingItem
            icon="phone"
            label="Cambiar número de teléfono"
            subtitle="Actualiza tu número"
            onPress={() => navigation.navigate('ChangePhone')}
          />
          <SettingItem 
            icon="bell" 
            label="Notificaciones" 
            subtitle="Administra tus notificaciones" 
            onPress={() => navigation.navigate('Notification')}/>
          <SettingItem
            icon="log-out"
            label="Cerrar sesión"
            subtitle="Cierra tu sesión actual"
            danger
            onPress={() => {
              // Lógica de cierre de sesión aquí
              navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
            }}
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const SettingItem = ({ icon, label, subtitle, danger, onPress, rightElement }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Icon name={icon} size={20} color={danger ? '#D9534F' : '#0593D3'} />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={[styles.itemText, danger && { color: '#D9534F' }]}>{label}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
    {rightElement || <Icon name="chevron-right" size={20} color="#999" />}
  </TouchableOpacity>
);

export default AccountSettingsView;
