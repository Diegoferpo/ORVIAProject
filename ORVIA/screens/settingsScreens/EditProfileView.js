import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/settingsScreensStyles/EditProfileStyle';
import DatePickerComponent from '../../components/DatePickerComponent';

const EditProfileView = ({ navigation }) => {
  const [firstName, setFirstName] = useState('Emmet');
  const [lastName, setLastName] = useState('Lego');
  const [profession, setProfession] = useState('Fisioterapeuta');
  const [phone, setPhone] = useState('4421234567');

  const handleSave = () => {
    console.log('Datos actualizados');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Icon name="user" size={75} color="#0593D3" />
          </View>
          <Text style={styles.name}>Emmet L.</Text>
          <Text style={styles.role}>Fisioterapeuta</Text>
        </View>

        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Nombre"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Apellido"
        />
        <TextInput
          style={styles.input}
          value={profession}
          onChangeText={setProfession}
          placeholder="Especialidad"
        />

        <TouchableOpacity style={styles.inputIconContainer} onPress={() => setShowDatePicker(true)}>
          <Icon name="calendar" size={18} color="#0593D3" style={styles.inputIcon} />
          <DatePickerComponent />
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default EditProfileView;
