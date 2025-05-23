import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  scrollContent: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  header: {
    marginBottom: '5%',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0593D3',
    paddingVertical: '4%',
    paddingHorizontal: '5%',
    borderRadius: 12,
  },
  avatar: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    marginRight: '5%',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 14,
    color: '#E0F7FF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: '2%',
    marginTop: '4%',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: '2%',
    marginBottom: '5%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: width * 0.085,
    height: width * 0.085,
    borderRadius: width * 0.0425,
    backgroundColor: '#E6F7FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '4%',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
  },
});

export default styles;
