import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Live_data } from '../Data/Data';
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

const Live = () => {
  return (
    <View style={styles.Live_section}>
       <Text style={styles.recent_heading}>recently played</Text>
        <ScrollView style={styles.top_container} horizontal showsHorizontalScrollIndicator={false}>
                {Live_data.map((data) => (
                    <TouchableOpacity style={styles.top_box} key={data.id}>
                        <View style={styles.image_box}>
                            {data.image}
                            <TouchableOpacity style={styles.live_box}>
                                <Text style={styles.live}>Live</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box_body}>
                            <View style={styles.left_content}>
                            <Text style={styles.box_body_heading}>{data.heading}</Text>
                            <Text style={styles.box_body_text}>{data.details}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
    </View>
  )
}

export default Live;

const styles = StyleSheet.create({
    Live_section: {
        marginTop: 19,
        marginBottom: 25,
    },
    recent_heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        textTransform: 'capitalize',
        paddingVertical: 25,
    },
    top_container: {
        flexDirection: 'row',
        marginBottom: 150,
    },
    top_box: {
        marginRight: 15,
    },
    image_box: {
        position: 'relative',
    },
   live_box: {
    position: 'absolute',
    backgroundColor: '#FF7735',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    right: 10,
   },
   live: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Montserrat_600SemiBold',
    textTransform: 'capitalize',
    color: '#ffffff',
   },
    box_body: {
        paddingVertical: 18,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
    },
    box_body_heading: {
        fontSize: 12,
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