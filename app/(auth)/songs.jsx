import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, {useContext, useState} from 'react';
import Back from "../../assets/images/back.svg";
import Dark_Back from "../../assets/images/dark_back.svg";
import {Redirect, router} from "expo-router";
import Song from "../../assets/images/song.svg";
import Shuffle from "../../assets/images/shuffle.svg";
import Play from "../../assets/images/pink_circle_play.svg";
import Playing from "../../assets/images/pink_playing.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { songs_data } from '../../components/Data/Data';
import Settings from "../../assets/images/settings.svg";
import Tab_img from "../../assets/images/play_tab_img.svg";
import Prev from "../../assets/images/previous.svg";
import Plays from "../../assets/images/play_cricle.svg";
import Playing2 from "../../assets/images/playing.svg";
import Next from "../../assets/images/next.svg";
import ThemeContext from '../../theme/ThemeContext';

const Songs = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlaying1, setIsPlaying1] = useState(false);

    const toggleplay = () => {
        setIsPlaying(!isPlaying);
    };

    const togglePlay1 = () => {
        setIsPlaying1(!isPlaying1);
      };
    
    const goback = () => {
        router.push('library');
    };

    const player = () => {
      router.push('music_player');
    };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
     { darkMode ? <Dark_Back /> :  <Back />}
        </TouchableOpacity>
      </View>
      <View style={styles.top_box} >
            <View style={styles.image_box}>
              <Song />
              <Text style={styles.image_text}>Liked Songs</Text>
            </View>
          </View>
          <View style={styles.top_row}>
            <View style={styles.row_left}>
                <Text style={[styles.main_song_name, {color: theme.color}]}>Liked Songs</Text>
                <Text style={styles.list}>Playlist, 25 songs</Text>
            </View>
            <View style={styles.row_right}>
                <TouchableOpacity>
                <Shuffle />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleplay}>
                    {isPlaying ? <Playing /> : <Play /> }
                </TouchableOpacity>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.songs_container}>
            {
                songs_data.map((d) => (
                    <TouchableOpacity style={styles.songs_tab} key={d.id} onPress={player}>
                        <View style={styles.left_content}>
                        {d.image}
                        <View style={styles.song_content}>
                            <Text style={[styles.songs_name, {color: theme.color}]}>{d.name}</Text>
                            <Text style={styles.singer}>{d.singer}</Text>
                        </View>
                        </View>
                        <Settings />
                    </TouchableOpacity>
                ))
            }
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
          <TouchableOpacity onPress={togglePlay1}>
            {isPlaying1 ? <Playing2 /> : <Plays />}
          </TouchableOpacity>
          <TouchableOpacity>
          <Next />
          </TouchableOpacity>
        </View>
      </View>
          </ScrollView>
    </View>
  )
}

export default Songs;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    top_box: {
        marginRight: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      image_box: {
        position: 'relative',
      },
      image_text: {
        fontSize: 20.57,
        lineHeight: 37,
        fontFamily: 'Montserrat_700Bold',
        color: '#ffffff',
        textTransform: 'capitalize',
        position: 'absolute',
        textAlign: 'center',
        left: 20,
        bottom: 20,
      },
      top_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 24,
      },
      row_left: {

      },
      main_song_name: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_700Bold',
      },
      list: {
        fontSize: 10,
        lineHeight: 20, 
        fontFamily: 'Lato_400Regular',
        color: '#757575',
      },
      row_right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      },
      songs_container: {
        gap: 10,
       
      },
      songs_tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
      left_content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
      },
      song_content: {

      },
      songs_name: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Lato_700Bold',
        color: '#121212',
      },
      song_name: {
        fontSize: 16,
        lineHeight: 26, 
        fontFamily: 'Lato_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
      },
      singer: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
      },
      play_tab: {
        borderRadius: 10,
        backgroundColor: '#D81159',
        paddingVertical: 10,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 450,
      },
      tab_left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      tab_content: {
    
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
      
    })