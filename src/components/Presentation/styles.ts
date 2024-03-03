import { theme } from '@/theme';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  aboutContent: {
    width: width,
    height: height * 0.55,
    marginTop: height * 0.1,
    backgroundColor: theme.colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: theme.size.lg,
    textAlign: 'center',
    margin: 10,
    color: theme.colors.primary,
    fontFamily: theme.fonts.Roboto_500,
    letterSpacing: -0.2,
    position: 'absolute',
    bottom: 50,
  },
  about: {
    width: width,
    height: height * 0.7,
  },
  linearGradient: {
    width: width * 0.15,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 100,
  },
  title: {
    fontSize: theme.size.xs,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  question: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: theme.colors.primary,
    fontFamily: theme.fonts.Roboto_700,
    letterSpacing: -1,
  },
  text: {
    fontSize: theme.size.md,
    textAlign: 'center',
    margin: 10,
    color: theme.colors.primary,
    fontFamily: theme.fonts.Roboto_400,
    opacity: 0.75,
  },
  arrowUp: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: width * 0.04,
    borderRightWidth: width * 0.04,
    borderBottomWidth: height * 0.03,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: theme.colors.black,
  },
});

export default styles;
