import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
  },
  scrollContent: {
    padding: '5%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#022B3A',
    marginBottom: '3%',
  },
  card: {
    backgroundColor: '#F7F9FB',

  },
  segmentContainer: {
    marginBottom: '5%',
    backgroundColor: '#FFFFFF',
    padding: '4%',
    borderRadius: '3%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  itemContainer: {},
  iconLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
  },
  icon: {
    marginRight: '2%',
  },
  label: {
    fontSize: 14,
    color: '#666666',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  value: {
    fontSize: 18,
    color: '#022B3A',
    fontWeight: '500',
    marginLeft: '7%',
  },
});

export default styles;