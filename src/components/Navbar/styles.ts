import { theme } from '@/theme';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: width,
    height: width * 0.06,
    backgroundColor: '#000',
  },
  navbarLogo: {
    height: width * 0.025,
    marginLeft: width * 0.05,
  },
});

export default styles;
