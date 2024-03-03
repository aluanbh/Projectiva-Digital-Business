import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

const About = () => {
  return (
    <View style={styles.aboutContent}>
      <LinearGradient
        colors={['#19CFF8', '#4B23BE']}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.75 }}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>QUEM SOMOS</Text>
      </LinearGradient>

      <Text style={[styles.question, { marginTop: 20 }]}>Sobre a BeHub & Projectiva</Text>

      <Text style={[styles.text, { marginBottom: 90 }]}>
        Somos uma equipe especializada em consultoria, com mais de 10 anos de experiência, focada
        em: Big Data, SAP, ERP, IoT, Desenvolvimento e {'\n'} Consultoria Ágil. Ajudamos na
        Transformação Digital de diversas empresas nacionais e internacionais.
      </Text>

      <Text style={styles.text2}>Empresas que confiam em nossa expertise:</Text>
      <View style={styles.arrowUp}></View>
    </View>
  );
};

export default About;
