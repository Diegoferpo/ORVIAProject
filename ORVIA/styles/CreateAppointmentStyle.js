import { StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      marginHorizontal: '8%',
      paddingTop: '8%',
      paddingBottom: '10%',
    },
    label: {
      marginBottom: '3%',
      marginTop: '2%',
      fontWeight: '500',
      color: '#333',
      fontSize: 14
    },
    input: {
      backgroundColor: '#fff',
      paddingHorizontal: '4%',
      paddingVertical: Platform.OS === 'ios' ? '3%' : '2%',
      borderRadius: 8,
      fontSize: 16,
      width: '100%',
      marginBottom: '3%', 
      shadowOpacity: 0.1,
    },
    smallInput: {
      width: '30%',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 8,
    },
    button: {
      backgroundColor: '#055E74',
      marginTop: '6%',
      paddingVertical: '4%',
      borderRadius: 10,
      alignItems: 'center',
      width: '100%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
})

  export default styles;