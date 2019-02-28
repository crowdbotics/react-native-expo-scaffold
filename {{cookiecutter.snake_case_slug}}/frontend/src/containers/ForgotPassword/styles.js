import {
  PixelRatio,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1142',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: PixelRatio.getPixelSizeForLayoutSize(12),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(30),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  logo: {
    height: PixelRatio.getPixelSizeForLayoutSize(40),
    width: PixelRatio.getPixelSizeForLayoutSize(40),
    resizeMode: 'contain',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(2),
    backgroundColor: '#121d56',
    borderColor: '#121d56',
  },
  input: {
    color: 'white',
  },
  resetInstructionsText: {
    color: '#bec0ce',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  button: {
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(2),
    backgroundColor: '#7646e4',
  },
  sendText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  rememberAccountText: {
    color: '#bec0ce',
    fontSize: 16,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
});


export default styles;
