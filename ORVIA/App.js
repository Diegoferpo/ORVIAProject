import HomeView from './screens/HomeView'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarView from './screens/CalendarView';
import PatientsView from './screens/PatientsView';
import ProfileView from './screens/ProfileView';
import CreateAppointment from './screens/CreateAppointmentView';
import styles from './styles/AppStyle';
import StatusBarCustom from './components/Header';
import Navbar from './components/Navbar';
import {Platform } from 'react-native';


const Tab = createBottomTabNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <StatusBarCustom backgroundColor="#022B3A" style="light" />

      <Tab.Navigator 
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#022B3A', 
            height: Platform.OS === 'android' ? 80 : 80,},

          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 32},
          headerBackVisible: false,
        }}
        tabBar={(props) => <Navbar {...props} />}
      >
        <Tab.Screen name="Inicio" component={HomeView} />
        <Tab.Screen name="Calendario" component={CalendarView} />
        <Tab.Screen name="Agendar Cita" component={CreateAppointment} />
        <Tab.Screen name="Pacientes" component={PatientsView} />
        <Tab.Screen name="Perfil" component={ProfileView} />
      </Tab.Navigator>

    </NavigationContainer>
);
}