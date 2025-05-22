import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SingInView';
import SignUpScreen from '../screens/SignUpView';
import ConfirmView from '../screens/ConfirmView';

const Stack = createNativeStackNavigator();

export const  AuthNavigator =() => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Confirm" component={ConfirmView} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;