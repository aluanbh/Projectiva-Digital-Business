import { useState } from 'react';
import { View, Image, ScrollView, SafeAreaView } from 'react-native';
import uuid from 'react-native-uuid';

import Navbar from '@/components/Navbar';
// import Banner from '@/components/Banner';
import Card from '@/components/Card';
import Modal from '@/components/Modal';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Presentation from '@/components/Presentation';

import Banner from '@/assets/img/banner.png';

import styles from './styles';
// 

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [subject, setSubject] = useState(0);
  const [endpoint, setEndpoint] = useState('');

  const generateUUID = () => {
    const id = uuid.v4();
    return id;
  };

  const handleCardPress = (code: string, idSubject: number) => {
    setSubject(idSubject);
    const uuid = generateUUID();
    const endpoint = `https://projectivadt.com.br/#/participar/${uuid}|${code}`;

    setEndpoint(endpoint);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setEndpoint('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView style={styles.content}>
        {/* <Banner /> */}
        <Image source={Banner} style={styles.header} />

        <View style={styles.subBar} />

        <View style={styles.body}>
          <Presentation />

          <View style={styles.cardContainer}>
            <Card
              badgeText='1º PRÊMIO'
              title='Aplicação do Radar de Maturidade de Business Agility'
              text='Ganhe uma análise detalhada da agilidade de seus negócios com nosso Radar de Maturidade.'
              onPress={() => handleCardPress('d8610f68-6951-41bd-85db-76d00570dbaa', 1)}
            />
            <Card
              badgeText='2º PRÊMIO'
              title='Aplicação do Radar de Maturidade para 3 Times Ágeis'
              text='Descubra o potencial dos seus times ágeis. Uma avaliação detalhada para até três equipes, focando em práticas ágeis, colaboração e eficiência.'
              onPress={() => handleCardPress('76968ca9-8993-4e71-85b7-fbbceffda9eb', 2)}
            />
            <Card
              badgeText='3º PRÊMIO'
              title='Treinamento de Kanban na Prática.'
              text='Ganhe um treinamento prático e exclusivo no Kanban. Melhore a gestão do fluxo de trabalho, aumente a produtividade e otimize processos de entrega.'
              onPress={() => handleCardPress('bc675452-3752-46a5-9339-2126b16269c8', 3)}
            />
          </View>

          <About />

          <Footer />
        </View>

        <Modal
          visible={isModalVisible}
          onClose={handleCloseModal}
          value={endpoint}
          idSubject={subject}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
