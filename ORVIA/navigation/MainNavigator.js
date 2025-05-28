import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

import CreateAppointment from '../screens/CreateAppointmentView';
import CalendarStack from '../screens/CalendarView';
import HomeView from '../screens/HomeView';
import Navbar from '../components/Navbar';
import PatientStack from '../screens/PatientsView';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <SafeAreaProvider>
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#022B3A',
          height: Platform.OS === 'android' ? 90 : 110,
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 32 },
        headerBackVisible: false,
      }}
      tabBar={(props) => <Navbar {...props} />}
    >
      <Tab.Screen name="Inicio" component={HomeView} />
      <Tab.Screen
        name="Calendario"
        component={CalendarStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'CalendarioPrincipal';
          const hideHeader = routeName !== 'CalendarioPrincipal';
          return {
            headerShown: !hideHeader,
          };
        }}
      />
      <Tab.Screen name="Agendar Cita" component={CreateAppointment} />
      <Tab.Screen 
        name="Pacientes" 
        component={PatientStack} 
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Patients';
          const hideHeader = routeName !== 'Patients';
          return {
            headerShown: !hideHeader,
          };
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileStack} 
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'PerfilPrincipal';
          const hideHeader = routeName !== 'PerfilPrincipal';
          return {
            headerShown: !hideHeader,
          };
        }}
      />
    </Tab.Navigator>
    </SafeAreaProvider>
  );
}
