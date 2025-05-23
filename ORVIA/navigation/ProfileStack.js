import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ProfileView from '../screens/ProfileView'; 
import EditProfileView from '../screens/settingsScreens/EditProfileView';
import AccountView from '../screens/settingsScreens/AccountView';
import NotificationView from '../screens/settingsScreens/NotificationView';
import AboutView from '../screens/settingsScreens/AboutView';
import FAQView from '../screens/settingsScreens/FAQView';
import HelpView from '../screens/settingsScreens/HelpView';
import PrivacyView from '../screens/settingsScreens/PrivacyView';
import ReportProblemView from '../screens/settingsScreens/ReportProblemView';
import ChangePasswordView from '../screens/settingsScreens/ChangePasswordView';
import ChangeEmailView from '../screens/settingsScreens/ChangeEmailView';
import ChangePhoneView from '../screens/settingsScreens/ChangePhoneView';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#022B3A',
          height: Platform.OS === 'android' ? 80 : 80,
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="PerfilPrincipal"
        component={ProfileView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileView}
        options={{ title: 'Configuración perfil' }}
      />
      <Stack.Screen
        name="Account"
        component={AccountView}
        options={{ title: 'Ajustes de cuenta' }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationView}
        options={{ title: 'Notificaciones' }}
      />
      <Stack.Screen
        name="About"
        component={AboutView}
        options={{ title: 'Sobre nosotros' }}
      />
      <Stack.Screen
        name="Help"
        component={HelpView}
        options={{ title: 'Ayuda y soporte' }}
      /> 
      <Stack.Screen
        name="FAQ"
        component={FAQView}
        options={{ title: 'Preguntas frecuentes' }}
      /> 
      <Stack.Screen
        name="Privacy"
        component={PrivacyView}
        options={{ title: 'Aviso de privacidad' }}
      />
      <Stack.Screen
        name="ReportProblem"
        component={ReportProblemView}
        options={{ title: 'Reportar un error' }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordView}
        options={{ title: 'Cambiar contraseña' }}
      />
      <Stack.Screen
        name="ChangeEmail"
        component={ChangeEmailView}
        options={{ title: 'Ajustes email' }}
      />
      <Stack.Screen
        name="ChangePhone"
        component={ChangePhoneView}
        options={{ title: 'Ajustes teléfono' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
