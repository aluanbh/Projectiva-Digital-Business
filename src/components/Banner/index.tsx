import React from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Dian from '@/assets/img/dian.png';
import AgileTrendsLogo from '@/assets/img/agiletrendsLogo.png';
import styles from './styles';

const Banner = () => {
  return (
    <View style={styles.bannerContent}>
      <View style={styles.banner}>
        <View >
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={styles.banner_text_main}>
              Transforme sua Empresa{'\n'} com <Text style={{ color: '#64bcff' }}>Business Agility.</Text>
            </Text>
            <View style={styles.banner_box_subtitle}>
              <Text style={styles.banner_text_subtitle}>
                Prepare sua empresa para responder rapidamente às Mudanças do Mercado, torne-se ágil e adaptável e eleve a sua empresa ao próximo nível!
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.banner_dian_image_box}>
          <View style={styles.slide_agile_dian_image}>
            <Image source={Dian} style={styles.image} />
          </View>
        </View>
        <View style={styles.banner_promo}>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <View style={styles.banner_dian_info_img}>
              <Image source={AgileTrendsLogo} style={{}} />
              <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', marginTop: 2, fontWeight: '700' }}>
                Palestrante
              </Text>
            </View>

          </View>
          <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', marginTop: 10 }}>
            Dian Costa | CDO
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Banner;
