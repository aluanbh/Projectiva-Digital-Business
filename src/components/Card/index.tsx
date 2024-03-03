import React from 'react';
import { TouchableOpacity, View, Text, GestureResponderEvent } from 'react-native';

import style from './styles';

interface CardProps {
  badgeText: string;
  title: string;
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Card = ({ badgeText, title, text, onPress }: CardProps) => {
  return (
    <TouchableOpacity style={style.card} onPress={onPress}>
      <View style={style.cardBadge}>
        <Text style={style.cardBadgeText}>{badgeText}</Text>
      </View>
      <Text style={style.cardTitle}>{title}</Text>
      <Text style={style.cardText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Card;
