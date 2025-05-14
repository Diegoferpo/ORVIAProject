import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    padding: 16,
  },

  fechaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  fechaNumero: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  fechaTexto: {
    fontSize: 14,
    color: '#777',
    width: width * 0.5,
  },
  horaBox: {
    backgroundColor: '#007E8F',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  horaTexto: {
    color: '#fff',
    fontWeight: '600',
  },

  content: {
    paddingBottom: 100,
  },

  nombre: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    alignSelf: 'center',
    marginBottom: 16,
  },

  etiqueta: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginBottom: 4,
  },

  valor: {
    fontSize: 13,
    color: '#444',
    marginBottom: 16,
  },

  linea: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 16,
  },
});

export default styles;