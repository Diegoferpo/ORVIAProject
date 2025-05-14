import styles from '../styles/ProfileStyle';
import Navbar from '../components/Navbar';
import React from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProfileView = ({navigation}) => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollContent}>
        <View style={styles.header}>
            <View style={styles.profileCard}>
            <Image
                source={{ uri: '../assets/emmet.jpg' }}  //Cambiar a la ruta correcta de la imagen
                style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>Emmet L.</Text> 
                <Text style={styles.role}>Fisioterapeuta</Text>
            </View>
            <TouchableOpacity style={{ padding: 10 }}>
                <Icon name="edit-2" size={20} color="#fff" />
            </TouchableOpacity>
            </View>
        </View>

        {/* Opciones de configuración */}
        <View style={styles.section}>
            <SettingItem icon="user" label="Mi cuenta" subtitle="Haz cambios a tu cuenta" />
            <SettingItem icon="bell" label="Notificaciones" subtitle="Administra tus notificaciones" />
            <SettingItem
            icon="moon"
            label="Modo oscuro"
            subtitle="Cambia la apariencia"
            rightElement={
                <Switch value={darkMode} onValueChange={setDarkMode} />
            }
            />
            <SettingItem
            icon="shield"
            label="Autenticación de dos pasos"
            subtitle="Protege más tu cuenta"
            />
            <SettingItem
            icon="log-out"
            label="Cerrar sesión"
            subtitle="Cierra tu sesión actual"
            danger
            />
        </View>

        {/* Más de Orvia */}
        <Text style={styles.sectionTitle}>Más de Orvia</Text>
        <View style={styles.section}>
            <SettingItem icon="info" label="Sobre nuestra app" />
            <SettingItem icon="help-circle" label="Ayuda y soporte" />
            <SettingItem icon="book-open" label="Preguntas frecuentes" />
            <SettingItem icon="shield" label="Aviso de privacidad" />
            <SettingItem icon="alert-circle" label="Reportar un error" danger />
        </View>  

        <View style={{ height: 100 }} /> 
        </ScrollView>

    </View>
  );
};

const SettingItem = ({
  icon,
  label,
  subtitle,
  rightElement,
  danger,
}) => (
  <TouchableOpacity style={styles.item}>
    <View style={styles.iconContainer}>
      <Icon name={icon} size={20} color="#0593D3" />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={[styles.itemText, danger && { color: '#D9534F' }]}>{label}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
    {rightElement || <Icon name="chevron-right" size={20} color="#999" />}
  </TouchableOpacity>
);



export default ProfileView;