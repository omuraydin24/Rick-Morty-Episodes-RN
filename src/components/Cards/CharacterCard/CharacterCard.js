import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import useFetch from '../../hooks/useFetch'

import styles from "./CharacterCard.styles"

const CharacterCard = ({ characters }) => {
  const navigation = useNavigation();
  const {
    loading,
    error,
    data: incomingData
  } = useFetch(characters)
  
  if (error) {
    return <Text>Error!</Text>
  }

  const handleNavigation = () => {
    navigation.navigate('CharacterDetailPage', {
      characterData: incomingData
    })
  }

  return (
    <TouchableOpacity onPress={handleNavigation}>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{incomingData.name}</Text>
        </View>
        <Image style={styles.image} source={{ uri: incomingData.image }} />
      </View>
    </TouchableOpacity>
  );
}


export default CharacterCard;
