import { theme } from '@/theme';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: width * 0.59,
    height: height * 0.8,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
  modalHeader: {
    flex: 0.25,
    width: width * 0.59,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.separator,
  },
  modalTitle: {
    fontSize: theme.size.xl,
    textAlign: 'center',
    margin: 10,
    color: theme.colors.primary,
    fontFamily: theme.fonts.Roboto_400,
  },
  bold: {
    fontFamily: theme.fonts.Roboto_900,
  },
  modalBody: {
    flex: 0.75,
    width: width * 0.59,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
  },
  modalBodyTitle: {
    fontSize: theme.size.xl,
    textAlign: 'center',
    color: theme.colors.primary,
    fontFamily: theme.fonts.Roboto_700,
  },
  modalBodyPhrase: {
    fontSize: theme.size.mdl,
    textAlign: 'center',
    color: theme.colors.primary,
    fontFamily: theme.fonts.Roboto_400,
  },
  emphasis: {
    fontFamily: theme.fonts.Roboto_700,
  },
  button: {
    width: width * 0.23,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
  buttonText: {
    fontSize: theme.size.xs,
    fontFamily: theme.fonts.Roboto_400,
    textAlign: 'center',
    margin: 10,
    color: theme.colors.white,
  },
});

export default styles;
