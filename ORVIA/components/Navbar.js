
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styles from '../styles/NavbarStyle';

export default function Navbar({ navigation }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>
        <Ionicons name="calendar-outline" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.centralButton} onPress={() => navigation.navigate('Create')}>
        <Ionicons name="add" size={36} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Patients')}>
        <Ionicons name="folder-open-outline" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}
