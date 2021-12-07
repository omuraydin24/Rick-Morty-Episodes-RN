import { useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './CharacterDetailPage.styles';

const CharacterDetailPage = () => {
  const route = useRoute()
  const { characterData } = route.params
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: characterData.image }} />
      <Text style={styles.name}>{characterData.name}</Text>
      <Text style={styles.info}>Species: {characterData.species}</Text>
      <Text style={styles.info}>Gender: {characterData.gender}</Text>
      <Text style={styles.info}>Origin: {characterData.origin.name}</Text>
      <Text style={characterData.status === "Alive" ? styles.statusAlive : styles.statusDead}>{characterData.status}</Text>
    </View>
  );
}
export default CharacterDetailPage;
