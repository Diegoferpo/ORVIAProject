import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


const StatusBarCustom = ({ backgroundColor = '#022B3A', style = 'light' }) => {
  return (
    <>
      <StatusBar translucent backgroundColor={backgroundColor} style={style} />
      <SafeAreaView
        edges={['top']}
        style={{ backgroundColor }}
      />
    </>
  );
};

export default StatusBarCustom;
