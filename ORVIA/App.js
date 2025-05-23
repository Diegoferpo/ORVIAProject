import HomeStack from './screens/HomeView'
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
import CalendarStack from './screens/CalendarView';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


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
        <Tab.Screen
          name="Inicio"
          component={HomeStack}
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeView';
            const hideHeader = routeName !== 'HomeView';
            return {
              headerShown: !hideHeader,
            };
          }}
        />
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
          component={PatientsView}
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Patients';
            const hideHeader = routeName !== 'Patients';
            return {
              headerShown: !hideHeader,
            };
          }}/>
        <Tab.Screen name="Perfil" component={ProfileView} />
      </Tab.Navigator>

    </NavigationContainer>
);
}