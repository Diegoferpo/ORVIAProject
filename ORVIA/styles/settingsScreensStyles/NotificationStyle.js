import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#0a3d62',
  },
  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  botonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#007C91',
    padding: 16,
    zIndex: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  bannerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  bannerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default styles;