import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '11%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%'
  },
  centralButton: {
    width: '13%',
    height: 50,
    marginTop: '5%',
    borderRadius: 20,
    backgroundColor: '#022B3A',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
  },
});
