import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify';
import { Auth } from '@aws-amplify/auth'; 
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';


import awsconfig from './src/aws-exports';
import StatusBarCustom from './components/Header';
import MainNavigator from './navigation/MainNavigator'; 
import AuthNavigator from './navigation/AuthNavigator';

Amplify.configure(awsconfig);

Amplify.configure({
  ...awsconfig,
  Auth: {
    region: awsconfig.aws_cognito_region,
    userPoolId: awsconfig.aws_user_pools_id,
    userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
  },
});

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
        <MainNavigator onLogout={() => setUser(null)} />
        </>
      ) : (
        <AuthNavigator onLogin={checkUser} />
      )}
    </NavigationContainer>
  );
}
