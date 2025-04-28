import { View } from 'react-native';
import styles from '../styles/CreateAppointmentStyle';
import Navbar from '../components/Navbar';


const CreateAppointmentView = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View></View>

            <Navbar navigation={navigation} />
        </View>
    );
}

export default CreateAppointmentView;