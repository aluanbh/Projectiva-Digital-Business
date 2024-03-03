import { theme } from '@/theme';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: width * 0.2875,
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
    backgroundColor: theme.colors.gray,
    elevation: 5,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
  },
  cardBadge: {
    width: width * 0.08,
    backgroundColor: theme.colors.secondary,
    borderRadius: 100,
  },
  cardBadgeText: {
    fontSize: theme.size.xs,
    textAlign: 'center',
    margin: 9,
    color: theme.colors.white,
  },
  cardTitle: {
    fontSize: theme.size.mdl,
    textAlign: 'center',
    margin: 10,
    color: theme.colors.primary,
    fontFamily: theme.fonts.Roboto_700,
  },
  cardText: {
    fontSize: theme.size.xs,
    textAlign: 'center',
    margin: 10,
    color: theme.colors.primary,
    fontFamily: theme.fonts.Roboto_400,
    opacity: 0.9,
    lineHeight: theme.size.md,
    letterSpacing: -0.2,
  },
});

export default styles;
