import {
  PixelRatio,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PixelRatio.getPixelSizeForLayoutSize(12),
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(25),
  },
  button: {
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});


export default styles;
