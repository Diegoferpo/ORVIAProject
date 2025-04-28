import { View } from 'react-native';
import styles from '../styles/HomeStyle';
import Navbar from '../components/Navbar';


const HomeView = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View></View>

            <Navbar navigation={navigation} />
        </View>
    );
}

export default HomeView;