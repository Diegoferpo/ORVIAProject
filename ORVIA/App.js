import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from './screens/HomeView';
import CalendarView from './screens/CalendarView';
import PatientsView from './screens/PatientsVIew';
import ProfileView from './screens/ProfileView';
import CreateAppointment from './screens/CreateAppointmentView';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"
            component={HomeView}/>

          <Stack.Screen name="Calendar"
            component={CalendarView}/>

          <Stack.Screen name="Create"
            component={CreateAppointment}/>

          <Stack.Screen name="Patients"
            component={PatientsView}/>

          <Stack.Screen name="Profile"
            component={ProfileView}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
