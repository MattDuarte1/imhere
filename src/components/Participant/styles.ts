import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 20,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: '#FFF',
    flex: 1,
    fontSize: 16,
    marginLeft: 16
  },

  buttonContainer: {
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E23C44'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  }
})