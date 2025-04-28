import { View } from 'react-native';
import styles from '../styles/CalendarStyle';
import Navbar from '../components/Navbar';


const CalendarView = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View></View>

            <Navbar navigation={navigation} />
        </View>
    );
}

export default CalendarView;