import { StyleSheet, Text, View, TouchableOpacity, ScrollView,  } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_Back from "../../assets/images/dark_back.svg";
import { connect_data, genrus_data } from '../../components/Data/Data';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Tick from "../../assets/images/active_tick.svg";
import {Redirect, router} from "expo-router";
import Button from '../../components/Button/Button';
import ThemeContext from '../../theme/ThemeContext';


const Connect = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [selectedGenre, setSelectedGenre] = useState(genrus_data[0].id);

  const handleGenreClick = (id) => {
    setSelectedGenre(id);
  };

  const goback = () => {
    router.push('genrus');
  }

  const gohome = () => {
    router.push('home');
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
      {darkMode ? <Dark_Back /> :  <Back />}
        </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.color}]}>Connect</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.heading_text}>
      Connect with artists, and fellow music lovers to share your favorite playlists, and discover new tunes together.
      </Text>
      <View style={styles.genrus_container}>
        {connect_data.map((d) => (
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
        <Button buttonText="save" onPress={gohome} />
      </View>
      </ScrollView>
    </View>
  );
};

export default Connect;

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
    marginVertical: 40,
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
  button_box: {
    marginBottom: 20,
  }
});
