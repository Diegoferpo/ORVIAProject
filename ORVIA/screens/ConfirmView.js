import { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { Auth } from 'aws-amplify';

export default function ConfirmView({ route, navigation }) {
  const { email } = route.params;
  const [code, setCode] = useState('');

  const handleConfirm = async () => {
    try {
        await Auth.confirmSignUp(email, code);
        Alert.alert('Éxito', 'Cuenta confirmada. Ahora puedes iniciar sesión.');
        navigation.navigate('Login');

        await Auth.resendSignUp(email);
        Alert.alert('Código reenviado', 'Revisa tu correo electrónico');

    } catch (error) {
        console.log('Error en confirmación:', error);
        Alert.alert('Error', error.message || 'Código incorrecto');
    }
  };

  return (
    <View>
        <Text>Ingresa el código de confirmación</Text>
        <TextInput
            placeholder="Código"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
        />
        <Button title="Confirmar" onPress={handleConfirm} />
    </View>
  );
}
