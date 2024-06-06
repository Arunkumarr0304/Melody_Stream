import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Favourite_data, recent_data } from '../Data/Data';
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Play from '../../assets/images/play.svg';

const Favourite = () => {
  return (
    <View style={styles.favourite_section}>
        <Text style={styles.fav_heading}>Your Favourite Artist</Text>
        <ScrollView style={styles.fav_container} horizontal showsHorizontalScrollIndicator={false}>
        {
            Favourite_data.map((d) => (
                <TouchableOpacity style={styles.favourite_box} key={d.id}>
                    {d.image}
                    <Text style={styles.fav_text}>{d.text}</Text>
                </TouchableOpacity>
            ))
        }
        </ScrollView>
        <Text style={styles.recent_heading}>recently played</Text>
        <ScrollView style={styles.top_container} horizontal showsHorizontalScrollIndicator={false}>
                {recent_data.map((data) => (
                    <TouchableOpacity style={styles.top_box} key={data.id}>
                        <View style={styles.image_box}>
                            {data.image}
                        </View>
                        <View style={styles.box_body}>
                            <View style={styles.left_content}>
                            <Text style={styles.box_body_heading}>{data.heading}</Text>
                            <Text style={styles.box_body_text}>playlist</Text>
                            </View>
                            <Play />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
    </View>
  )
}

export default Favourite;

const styles = StyleSheet.create({
    favourite_section: {
        marginTop: 19,
        marginBottom: 25,
    },
    fav_heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        textTransform: 'capitalize',
    },
    recent_heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        textTransform: 'capitalize',
        paddingVertical: 25,
    },
    fav_container: {
        flexDirection: 'row',
        marginTop: 24,
    },
    favourite_box: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fav_text: {
        fontSize: 14,
        lineHeight: 24, 
        fontFamily: 'Montserrat_600SemiBold',
    },
    top_container: {
        flexDirection: 'row',
        marginBottom: 0,
    },
    top_box: {
        marginRight: 15,
    },
    image_box: {
        
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