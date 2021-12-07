import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import CharacterCard from "../CharacterCard";

import styles from "./EpisodeDetail.style"

const EpisodedetailStyle = ({ episodeData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{episodeData.name}</Text>
        <Text style={styles.episode}>{episodeData.episode}</Text>
        <Text style={styles.date}>{episodeData.air_date}</Text>
        <Text style={styles.seperator}>. . .</Text>
        <Text style={styles.characters}>Characters</Text>
      </View>

      <ScrollView>
        <View style={styles.grid}>
          {
            episodeData.characters.map((item, index) => {
              return (
                <CharacterCard key={index} characters={item} />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}
export default EpisodedetailStyle;

