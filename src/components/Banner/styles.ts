import { theme } from '@/theme';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  bannerContent: {
    width: width,
    height: height * 0.55,
    backgroundColor: '#10101d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  banner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },


  banner_text_subtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },


  banner_dian_image_box: {
    marginLeft: -80,
    marginTop: 50,
    width: width / 3,
  },

  banner_promo: {
    width: width / 3
  },
  slide_agile_dian_image: {
    display: 'flex',
    justifyContent: 'center',
  },

  image: {
    resizeMode: 'contain',
    height: width * 0.30,
  },


  banner_dian_info_img: {
    padding: 10,
    paddingTop: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },


});

export default styles;
