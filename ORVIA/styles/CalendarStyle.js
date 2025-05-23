import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  calendar: {
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  dateTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  scrollArea: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#EAEFFF',
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  time: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
});

export default styles;