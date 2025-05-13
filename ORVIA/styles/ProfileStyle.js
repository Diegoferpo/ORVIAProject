import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  scrollContent: {
    paddingBottom: '20%',
  },
  header: {
    backgroundColor: '#f7f7f7',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#055E74',
    borderRadius: 10,
    padding: '4%',
    width: '100%',
  },
  avatar: {
    width: '15%',
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: '5%',
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  role: {
    color: '#CFE3E9',
    fontSize: 14,
  },
  section: {
    backgroundColor: '#fff',
    marginVertical: '3%',
    paddingHorizontal: '4%',
    borderRadius: 10,
    marginHorizontal: '4%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  sectionTitle: {
    marginTop: '5%',
    marginLeft: '5%',
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '4%',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: '10%',
    alignItems: 'center',
    marginRight: '3%',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 12,
    color: '#888',
  },
});


  export default styles;