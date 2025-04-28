import { View } from 'react-native';
import styles from '../styles/PatientsStyle';
import Navbar from '../components/Navbar';


const PatientsView = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View></View>

            <Navbar navigation={navigation} />
        </View>
    );
}

export default PatientsView;