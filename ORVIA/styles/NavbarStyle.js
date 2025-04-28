import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '10%',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'absolute',
        bottom: '2%',
        width: '100%',
      },
      navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      centralButton: {
        backgroundColor: '#1F7A8C',
        width: '13%',
        height: '65%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '3%'
      },
})

export default styles;