import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeView from '../screens/HomeView';
import CalendarStack from '../screens/CalendarView';
import PatientsView from '../screens/PatientsView';
import ProfileView from '../screens/ProfileView';
import CreateAppointment from '../screens/CreateAppointmentView';
import Navbar from '../components/Navbar';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#022B3A',
          height: Platform.OS === 'android' ? 80 : 80,
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
      <Tab.Screen name="Pacientes" component={PatientsView} />
      <Tab.Screen name="Perfil" component={ProfileView} />
    </Tab.Navigator>
  );
}
