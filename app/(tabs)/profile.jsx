import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back.svg";
import Dp from "../../assets/images/Dp.svg";
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { profile_data } from '../../components/Data/Data';
import Drop_arrow from "../../assets/images/Vector.svg";
 
const Profile = () => {
  const goback = () => {
    router.push('home');
  };
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={goback}>
        <Back />
      </TouchableOpacity>
      <Text style={styles.heading}>profile</Text>
    </View>
    <View style={styles.profile_content}>
      <View style={styles.image_box}>
        <Dp />
      </View>
      <View style={styles.details_row}>
        <View style={styles.details}>
          <Text style={styles.name}>Minato Namikaza</Text>
          <Text style={styles.mail}>minatonami@gmail.com</Text>
          <Text style={styles.number}>(208) 555-0112</Text>
        </View>
        <TouchableOpacity style={styles.edit_box}>
          <Text style={styles.edit}>edit</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.profile_data_container}>
      {
        profile_data.map((d) => (
          <View style={styles.row} key={d.id}>
          <View style={styles.row_left}>
            {d.icon}
            <Text style={styles.row_text}>{d.name}</Text>
            </View>
            <Drop_arrow />
          </View>
        ))
      }
    </View>
    </View>
  )
}

export default Profile;

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
  profile_content: {
    marginTop: 30,
  },
  image_box: {
    alignItems: 'center',
    marginBottom: 30,
  },
  details_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {

  },
  name: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  mail: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
  },
  number: {
    fontSize: 12,
    lineHeight: 19,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
  },
  edit_box: {
    backgroundColor: '#FF7735',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    fontSize: 12,
    lineHeight: 19,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#ffffff',
    textTransform: 'capitalize',
  }
})