import { View, Text, Image } from 'react-native';
import Logo from '@/assets/img/logo-projectiva.png';

import styles from './styles';

export default function Navbar() {
  return (
    <View style={styles.navbarContainer}>
      <Image source={Logo} style={styles.navbarLogo} resizeMode='contain' />
    </View>
  );
}
