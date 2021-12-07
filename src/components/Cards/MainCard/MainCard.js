import React from 'react';


import { View, TouchableOpacity, Text } from 'react-native';

import styles from './MainCard.style'

const Maincard = ({ data, onPress }) => {
  return (
    <View style={styles.episodeContainer}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.episode}>{data.episode}</Text>
            <Text style={styles.date}>{data.air_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Maincard;
