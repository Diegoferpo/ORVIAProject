import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
    padding: 30,
    },
    boxBienvenida: {
      marginTop: '5%',
      marginBottom: '10%'
    },
    bienvenida: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#1F7A8C',
      fontFamily: 'roboto'
    },
    subtitulo: {
      fontSize: 18,
      marginBottom: '5%',
      fontWeight: 'bold'
    },
    lista: {
      paddingBottom: 140,
    },
    card: {
      backgroundColor: '#E1E5F2',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      borderRadius: 10
    },
    iconContainer: {
      marginRight: '5%',
      backgroundColor: '#f2f2f2',
      height:'100%',
      aspectRatio: 0.96,
      alignItems: 'center',
      borderRadius: 25,
      padding: 10,
      justifyContent: 'center',
      shadowColor: '#000',
      shadowRadius: 4,
    },
    timeContainer: {
      padding: '5%',
      borderBottomWidth: 0.5,
      borderColor: '#fff'
    },
    patientContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      margin: '5%'
    },
    fecha: {
      marginLeft:'2%',
      fontSize: 13,
      color: '#999',
    },
    nombre: {
      fontSize: 16,
      fontWeight: 'bold',
    },
})

  export default styles;