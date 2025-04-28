import { Text, SafeAreaView, StatusBar } from "react-native-safe-area-context";
import styles from "../styles/HeaderStyle";
const Header = () => {
    return(
        <SafeAreaView edges={['top']} style={styles.header}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <Text style={styles.headerText}>Inicio</Text>
        </SafeAreaView>
    )
}

export default Header;