import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/ProfileStyle';

const ProfileView = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <Icon name="user" size={28} color="#0593D3" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Emmet L.</Text>
              <Text style={styles.role}>Fisioterapeuta</Text>
            </View>
            <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate('EditProfile')}>
              <Icon name="edit-2" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Opciones de configuración */}
        <View style={styles.section}>
          <SettingItem icon="user" label="Mi cuenta" subtitle="Haz cambios a tu cuenta" onPress={() => navigation.navigate('Account')}/>
        </View>

        {/* Más de Orvia */}
        <Text style={styles.sectionTitle}>Más de Orvia</Text>
        <View style={styles.section}>
          <SettingItem icon="info" label="Sobre nuestra app" onPress={() => navigation.navigate('About')}/>
          <SettingItem icon="help-circle" label="Ayuda y soporte" onPress={() => navigation.navigate('Help')}/>
          <SettingItem icon="book-open" label="Preguntas frecuentes" onPress={() => navigation.navigate('FAQ')}/>
          <SettingItem icon="shield" label="Aviso de privacidad" onPress={() => navigation.navigate('Privacy')}/>
          <SettingItem icon="alert-circle" label="Reportar un error" danger onPress={() => navigation.navigate('ReportProblem')}/>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const SettingItem = ({ icon, label, subtitle, rightElement, danger, onPress }) => (
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


export default ProfileView;
