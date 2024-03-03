import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { theme } from '@/theme';

export default function Loading({ simple }: { simple?: boolean }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size='large'
        color={simple ? theme.colors.primary : theme.colors.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
