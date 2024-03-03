import { theme } from '@/theme';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  content: {
    flex: 1,
  },
  header: {
    width: width,
    height: height * 0.55,
  },
  subBar: {
    width: width,
    height: height * 0.08,
    backgroundColor: '#3F3167',
  },
  body: {
    marginTop: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  linearGradient: {
    width: width * 0.15,
    height: height * 0.04,
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    marginVertical: height * 0.05,
  },
});

export default styles;
