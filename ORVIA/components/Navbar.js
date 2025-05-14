import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../styles/NavbarStyle';

const Navbar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.navbar, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        let iconName = '';
        switch (route.name) {
          case 'Inicio':
            iconName = 'home-outline';
            break;
          case 'Calendario':
            iconName = 'calendar-outline';
            break;
          case 'Agendar Cita':
            iconName = 'add';
            break;
          case 'Pacientes':
            iconName = 'folder-open-outline';
            break;
          case 'Perfil':
            iconName = 'person-outline';
            break;
          default:
            iconName = 'ellipse-outline';
        }

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        const isCentral = route.name === 'Agendar Cita';

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={isCentral ? styles.centralButton : styles.navItem}
          >
            <Ionicons
              name={iconName}
              size={isCentral ? 36 : 28}
              color={isCentral ? 'white' : isFocused ? '#022B3A' : 'black'}

            />
            {!isCentral && (
              <Text style={{ fontSize: 1, color: isFocused ? '#022B3A' : 'black' }}>
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navbar;
