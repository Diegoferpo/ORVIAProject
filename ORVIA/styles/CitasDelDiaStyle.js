import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 7;

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
    marginBottom: 16,
  },
  fechaNumero: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  fechaTexto: {
    fontSize: 14,
    color: '#777',
  },
  estadoHoyBox: {
    backgroundColor: '#007E8F',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  estadoHoyTexto: {
    color: '#fff',
    fontWeight: '600',
  },

  scrollWrapper: {
    height: 72,
    width: '100%',
    marginBottom: 20,
  },
  selectorFijo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateX: -ITEM_WIDTH / 2 }, { translateY: -36 }],
    width: ITEM_WIDTH,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#007E8F',
    zIndex: 0,
  },
  diaItem: {
    width: ITEM_WIDTH-1,
    height: 72,
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  diaSeleccionado: {
    backgroundColor: 'transparent',
  },
  diaNumero: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  diaNumeroSeleccionado: {
    color: '#fff',
    fontWeight: '700',
  },
  diaLetra: {
    fontSize: 12,
    color: '#666',
  },

  listaCitas: {
    paddingBottom: 100,
  },
  citaFila: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  hora: {
    width: 60,
  },
  horaInicio: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  horaFin: {
    fontSize: 12,
    color: '#999',
  },
  cardCita: {
    flex: 1,
    backgroundColor: '#EAEFFF',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 8,
  },
  lineaLateral: {
    width: 4,
    backgroundColor: '#00B96F',
    borderRadius: 2,
    marginRight: 8,
  },
  nombre: {
    fontWeight: '600',
    color: '#000',
  },
  tratamiento: {
    fontWeight: '700',
    color: '#333',
    marginVertical: 4,
  },
  motivo: {
    color: '#444',
    fontSize: 12,
  },
});

export default styles;