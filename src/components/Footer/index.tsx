import React from 'react';
import { View, Image, Text } from 'react-native';

import Supporters from '@/assets/img/supporters.png';

import styles from './styles';

const Footer = () => {
  return (
    <>
      <View style={styles.supportersContent}>
        <Image source={Supporters} style={styles.supporters} resizeMode='contain' />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Projectiva Tecnologia - Todos os direitos reservados</Text>
      </View>
    </>
  );
};


export default Footer;
