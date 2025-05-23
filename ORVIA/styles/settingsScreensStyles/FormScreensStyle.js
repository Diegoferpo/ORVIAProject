import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '6%',
    paddingTop: '10%',
    backgroundColor: '#F4F6F8',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: '8%',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    marginBottom: '6%',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#0593D3',
    paddingVertical: '4%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '4%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
