import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
        backgroundColor: '#fff',
      },
      authContainer: {
        width: '80%',
        maxWidth: 600,
        backgroundColor: '#fff',
        padding: '2%',
        justifyContent: 'center',
      },
      title: {
        fontSize: 34,
        marginBottom: '20%',
        textAlign: 'center',
        color: '#1F7A8C'
      },
      input: {
        height: '8%',
        maxHeight: '10%',
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: '5%',
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#f8f9fa',
        fontSize: 16
      },
      buttonContainer: {
        marginBottom: 16,
        backgroundColor: '#022B3A',
        borderRadius: 10,
        padding: '3%', 
        height: '8%', 
        alignItems: 'center',
        justifyContent: 'center'
      },
      button1: {
        color: '#022B3A',
      },
      toggleText: {
        color: '#3498db',
        textAlign: 'center',
      },
      bottomContainer: {
        marginTop: 20,
      },
      emailText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
      },
      box: {
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '25%'
      }
        
})

  export default styles;