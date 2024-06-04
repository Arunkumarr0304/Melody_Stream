import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Montserrat_700Bold, Lato_400Regular } from '@expo-google-fonts/inter';

const Create_account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Create Account</Text>
      </View>
      <Text style={styles.head_text}>Create your account to unlock a personalized music experience tailored to your taste.</Text>
    </View>
  )
}

export default Create_account;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        color: '#121212',
        textTransform: 'capitalize',
        fontFamily: 'Montserrat_700Bold',
    },
    head_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        marginTop: 17,
    }
});

export async function loadFonts() {
  await Font.loadAsync({
    'Montserrat_700Bold': Montserrat_700Bold,
    'Lato_400Regular': Lato_400Regular,
  });
}