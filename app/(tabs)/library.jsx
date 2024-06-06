import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Back from "../../assets/images/back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import {Redirect, router} from "expo-router";
import { home_tab, library_data, library_tab, top_data } from '../../components/Data/Data';

const Library = () => {
  const [activeTab, setActiveTab] = useState(home_tab[0].id);
  const goback = () => {
    router.push('home');
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
                    <View style={styles.top_box} key={data.id}>
                        <View style={styles.image_box}>
                            {data.image}
                            <Text style={styles.image_text}>{data.heading}</Text>
                        </View>
                        <View style={styles.box_body}>
                            <Text style={styles.box_body_heading}>{data.heading}</Text>
                            <Text style={styles.box_body_text}>playlist</Text>
                        </View>
                    </View>
                ))}
            </View>
    </View>
  )
}

export default Library;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
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
  justifyContent: 'center',
},
top_box: {
  marginRight: 28,
},
image_box: {
  position: 'relative',
},
image_text: {
  fontSize: 16,
  lineHeight: 26,
  fontFamily: 'Montserrat_700Bold',
  fontWeight: '600',
  color: '#ffffff',
  textTransform: 'capitalize',
  position: 'absolute',
  textAlign: 'center',
  left: 15,
  top: 120,
},
box_body: {
  paddingVertical: 18,
  paddingHorizontal: 5,
},
box_body_heading: {
  fontSize: 14,
  lineHeight: 24,
  fontFamily: 'Montserrat_700Bold',
  color: '#121212',
  textTransform: 'capitalize',
},
box_body_text: {
  fontSize: 14,
  lineHeight: 24,
  fontFamily: 'Lato_400Regular',
  color: '#757575',
  textTransform: 'capitalize',
},
})