
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styles from '../styles/NavbarStyle';

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Inicio')}>
        <Ionicons name="home-outline" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendario')}>
        <Ionicons name="calendar-outline" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.centralButton} onPress={() => navigation.navigate('Agendar Cita')}>
        <Ionicons name="add" size={36} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Pacientes')}>
        <Ionicons name="folder-open-outline" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Perfil')}>
        <Ionicons name="person-outline" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Navbar;
