import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    
  },
  scrollContent: {
    marginTop: '8%',
    paddingBottom: '20%',
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#003C4F',
    marginTop: '5%',
    marginBottom: '2%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '4%',
    marginVertical: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 2,
  },
  cardLeft: {
    backgroundColor: '#E6F5FA',
    padding: '3%',
    borderRadius: 30,
    marginRight: '5%',
  },
  cardBody: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  cardDetails: {
    fontSize: 13,
    color: '#666',
    marginTop: '1%',
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 16,
  }, 
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 12,
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: '#F9F9F9',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 40,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },  
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },
  iconLeft: {
    marginRight: 8,
    alignSelf: 'center',
    transform: [{ translateY: 1 }],
  }  
});

  export default styles;