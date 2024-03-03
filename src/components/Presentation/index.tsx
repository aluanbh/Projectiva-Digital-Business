import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

const Presentation = () => {
  return (
    <>
      <LinearGradient
        colors={['#19CFF8', '#4B23BE']}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.75 }}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>PARTICIPE DO SORTEIO</Text>
      </LinearGradient>

      <Text style={styles.question}>Como participar do sorteio?</Text>

      <Text style={styles.text}>
        Como critério para participar do sorteio, apenas os usuários que interagirem com o post
        específico e {'\n'} seguirem nossa página poderão participar do sorteio, além do cadastro QR
        Code.
      </Text>
    </>
  );
};

export default Presentation;
