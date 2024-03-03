import { theme } from '@/theme';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  supportersContent: {
    width: width,
    height: height * 0.4,
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  supporters: {
    width: width * 0.75,
  },
  footer: {
    width: width,
    height: height * 0.1,
    backgroundColor: theme.colors.white,
    paddingLeft: 50,
    justifyContent: 'center',
  },
  footerText: {
    color: theme.colors.black,
    fontSize: 14,
  },
});

export default styles;
