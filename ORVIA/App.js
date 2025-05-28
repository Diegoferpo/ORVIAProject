import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import MainNavigator from './navigation/MainNavigator'; 
import AuthNavigator from './navigation/AuthNavigator';
import StatusBarCustom from './components/Header';

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      setUser(authUser);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        <>
        <StatusBarCustom backgroundColor="#022B3A" style="light" />
        <MainNavigator /*onLogout={() => setUser(null)} */ />
        </>
      ) : (
        <AuthNavigator /*onLogin={checkUser} */ />
      )}
    </NavigationContainer>
  );
}
