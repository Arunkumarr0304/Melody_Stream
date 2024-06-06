import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Back from "../../assets/images/back.svg";
import { genrus_data } from '../../components/Data/Data';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Tick from "../../assets/images/active_tick.svg";
import {Redirect, router} from "expo-router";
import Button from '../../components/Button/Button';


const Genrus = () => {
  const [selectedGenre, setSelectedGenre] = useState(genrus_data[0].id);

  const handleGenreClick = (id) => {
    setSelectedGenre(id);
  };

  const goback = () => {
    router.push('login');
  }

  const continues = () => {
    router.push('connect');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
        <Back />
        </TouchableOpacity>
        <Text style={styles.heading}>Genres</Text>
      </View>
      <Text style={styles.heading_text}>
        Dive into a world of musical genres, from classic to contemporary, and find your rhythm.
      </Text>
      <View style={styles.genrus_container}>
        {genrus_data.map((d) => (
          <TouchableOpacity
            style={[
              styles.genrus_box,
              selectedGenre === d.id && styles.selected_image_box,
            ]}
            key={d.id}
            onPress={() => handleGenreClick(d.id)}
          >
            <View style={styles.image_box}>
              {selectedGenre === d.id ? d.Active : d.image}
              {selectedGenre === d.id && <Tick style={styles.tick} />}
            </View>
            <Text style={styles.box_text}>{d.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.button_box}>
        <Button buttonText="continue" onPress={continues} />
      </View>
    </View>
  );
};

export default Genrus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
    color: '#121212',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat_700Bold',
  },
  heading_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
    marginTop: 17,
  },
  genrus_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    marginTop: 50,
    marginBottom: 60,
  },
  genrus_box: {
    maxWidth: 104,
    alignItems: 'center', 
  },
  image_box: {
    width: 98,
    height: 105,
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative',
  },
  box_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: 5,
  },
  tick: {
    position: 'absolute',
    top: 10,
    right: 7,
  },
});
