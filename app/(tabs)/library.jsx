import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Back from "../../assets/images/back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import {Redirect, router} from "expo-router";
import { home_tab, library_data, library_tab, top_data } from '../../components/Data/Data';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import Tab_img from "../../assets/images/play_tab_img.svg";
import Prev from "../../assets/images/previous.svg";
import Play from "../../assets/images/play_cricle.svg";
import Playing from "../../assets/images/playing.svg";
import Next from "../../assets/images/next.svg";

const Library = () => {
  const [activeTab, setActiveTab] = useState(home_tab[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  const goback = () => {
    router.push('home');
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const songs = () => {
    router.push('songs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.heading}>Your Library</Text>
      </View>
      <View style={styles.tab_container}>
        {library_tab.map((d) => (
          <TouchableOpacity 
            style={[styles.tab, activeTab === d.id && styles.activeTab]}
            key={d.id}
            onPress={() => setActiveTab(d.id)}
          >
            <Text style={[styles.tab_text, activeTab === d.id && styles.activeTab_text]}>
              {d.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.top_container}>
        {library_data.map((data) => (
          <TouchableOpacity style={styles.top_box} key={data.id} onPress={songs}>
            <View style={styles.image_box}>
              {data.image}
              <Text style={styles.image_text}>{data.heading}</Text>
            </View>
            <View style={styles.box_body}>
              <Text style={styles.box_body_heading}>{data.heading}</Text>
              <Text style={styles.box_body_text}>{data.playlist}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.play_tab}>
        <View style={styles.tab_left}>
          <Tab_img />
          <View style={styles.tab_content}>
            <Text style={styles.song_name}>Indie Music</Text>
            <Text style={styles.singer}>J-Hope</Text>
          </View>
        </View>
        <View style={styles.tab_right}>
          <TouchableOpacity>
          <Prev />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlay}>
            {isPlaying ? <Playing /> : <Play />}
          </TouchableOpacity>
          <TouchableOpacity>
          <Next />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 70,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
    color: '#121212',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat_700Bold',
  },
  tab_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginVertical: 24,
  },
  tab: {
    borderColor: '#D81159',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  tab_text: {
    textTransform: 'capitalize',
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Lato_700Bold',
    color: '#D81159',
  },
  activeTab: {
    backgroundColor: '#D81159',
  },
  activeTab_text: {
    color: '#ffffff',
  },
  top_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top_box: {
    marginRight: 0,
    maxWidth: 95,
  },
  image_box: {
    position: 'relative',
    maxWidth: 95,
  },
  image_text: {
    fontSize: 11,
    lineHeight: 21,
    fontFamily: 'Montserrat_700Bold',
    color: '#ffffff',
    textTransform: 'capitalize',
    position: 'absolute',
    textAlign: 'center',
    left: 5,
    top: 60,
  },
  box_body: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    maxWidth: 95,
  },
  box_body_heading: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  box_body_text: {
    fontSize: 10,
    lineHeight: 20,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
    textTransform: 'capitalize',
  },
  play_tab: {
    borderRadius: 10,
    backgroundColor: '#D81159',
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 90,
  },
  tab_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tab_content: {

  },
  song_name: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Lato_700Bold',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  singer: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Lato_400Regular',
    color: '#DDDDDD',
    textTransform: 'capitalize',
  },
  tab_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
