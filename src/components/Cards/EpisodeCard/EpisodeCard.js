import React from 'react';

import { View, Text, Image, TouchableOpacity, SafeAreaView, Linking } from 'react-native';

import styles from './EpisodeCard.style';

const Maincard = ({ episode, navigation }) => {
  return (
    <View>
      <Text>{episode.name}</Text>
      <Text>{episode.air_date}</Text>
      <Text>{episode.episode}</Text>
      <Image source={{ uri: episode.characters[0] }} />
    </View>
  );
}


export default Maincard;
