import { View } from 'react-native';
import styles from '../styles/ProfileStyle';
import Navbar from '../components/Navbar';


const ProfileView = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View></View>

            <Navbar navigation={navigation} />
        </View>
    );
}

export default ProfileView;