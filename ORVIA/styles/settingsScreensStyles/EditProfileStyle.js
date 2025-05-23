import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  content: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: '8%',
  },
  avatar: {
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '4%',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.1,
  shadowRadius: 1.41,
},

  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#003C4F',
    marginBottom: '2%',
  },
  role: {
    fontSize: 18,
    color: '#888',

  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '4%',
    marginBottom: '4%',
    fontSize: 16,
    color: '#333',
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: '4%',
  },
  inputIcon: {
    marginHorizontal: '4%',
  },
  inputWithIcon: {
    flex: 1,
    paddingVertical: '4%',
    paddingHorizontal: '3%',
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
  backgroundColor: '#00566B',
  paddingVertical: 14,
  borderRadius: 12,
  alignItems: 'center',
  marginTop: 30,
},
saveButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},
inputWithIcon: {
  flex: 1,
  fontSize: 16,
  color: '#000',
  paddingVertical: 12,
},


});

export default styles;