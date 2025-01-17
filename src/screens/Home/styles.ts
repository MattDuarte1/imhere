import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding:24
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1,
    marginTop: 5,
    paddingHorizontal: 16,
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#FFF',
    fontSize: 16
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 36,
    marginBottom: 42
  },
  buttonContainer: {
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31CF67'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  listEmptyComponent: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
});