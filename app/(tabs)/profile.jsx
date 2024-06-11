import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, Modal } from 'react-native';
import Back from "../../assets/images/back.svg";
import Dark_Back from "../../assets/images/dark_back.svg";
import Dp from "../../assets/images/Dp.svg";
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { profile_data } from '../../components/Data/Data';
import Drop_arrow from "../../assets/images/Vector.svg";
import Logout from "../../assets/images/profile_icon6.svg";
import { Redirect, router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';  

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);  // Use ThemeContext

  const goback = () => {
    router.push('home');
  };

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    setModalVisible(false);
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
      {darkMode ? <Dark_Back /> : <Back />}  
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.color }]}>profile</Text>
      </View>
      <View style={styles.profile_content}>
        <View style={styles.image_box}>
          <Dp />
        </View>
        <View style={styles.details_row}>
          <View style={styles.details}>
            <Text style={[styles.name, { color: theme.color }]}>Minato Namikaza</Text>
            <Text style={[styles.mail, { color: theme.text }]}>minatonami@gmail.com</Text>
            <Text style={[styles.number, { color: theme.text }]}> (208) 555-0112</Text>
          </View>
          <TouchableOpacity style={styles.edit_box}>
            <Text style={styles.edit}>edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profile_data_container}>
        {profile_data.map((d) => (
          <TouchableOpacity
            style={styles.row}
            key={d.id}
            onPress={() => {
              if (d.name === 'Dark Mode') toggleTheme();
            }}
          >
            <View style={styles.row_left}>
              {darkMode ? d.active_icon : d.icon}
              <Text style={[styles.row_text, { color: theme.text }]}>{d.name}</Text>
            </View>
            {d.name === 'Dark Mode' ? (
              <Switch
                trackColor={{ false: "#767577", true: "#FF7735" }}
                thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleTheme}
                value={darkMode}
                style={styles.switch}
              />
            ) : (
              <Drop_arrow />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Logout />
        <Text style={[styles.logout_text, { color: theme.color }]}>logout</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelLogout}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.button} onPress={confirmLogout}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={cancelLogout}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 80,
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
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
    marginBottom: 25,
  },
  details: {},
  name: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Montserrat_700Bold',
    textTransform: 'capitalize',
  },
  mail: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Lato_400Regular',
  },
  number: {
    fontSize: 12,
    lineHeight: 19,
    fontFamily: 'Lato_400Regular',
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
  },
  profile_data_container: {
    gap: 20,
    marginVertical: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  row_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 65,
    marginTop: 25,
  },
  logout_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    textTransform: 'capitalize',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#FF7735',
    minWidth: 60,
    maxWidth: 60,
  },
  buttonCancel: {
    backgroundColor: '#757575',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
    textAlign: 'center',
  },
  switch: {
    width: 20,
    maxHeight: 30,
  }
});
