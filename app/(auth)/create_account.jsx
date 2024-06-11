import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, {useContext, useState} from 'react';
import { Montserrat_700Bold, Lato_400Regular } from '@expo-google-fonts/inter';
import Profile from "../../assets/images/profile.svg";
import Mail from "../../assets/images/sms.svg";
import Lock from "../../assets/images/lock.svg";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import  Button  from '../../components/Button/Button';
import { Lato_700Bold } from '@expo-google-fonts/lato';
import { login_types } from '../../components/Data/Data';
import { Link, router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Create_account = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const create =() => {
    router.push('verification');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <Text style={[styles.heading, {color: theme.color}]}>Create Account</Text>
      </View>
      <Text style={styles.head_text}>Create your account to unlock a personalized music experience tailored to your taste.</Text>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.input_container}>
          <View style={styles.name_input}>
            <Text style={[styles.label, {color: theme.color}]}>Name</Text>
            <TextInput
              style={[styles.input, {backgroundColor: theme.card, color: theme.color}]}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder='Minato Namikaze'
            />
            <View style={styles.input_icon}>
              <Profile />
            </View>
          </View>
          <View style={styles.name_input}>
            <Text style={[styles.label, {color: theme.color}]}>Email Or Phone Number</Text>
            <TextInput
              style={[styles.input , {backgroundColor: theme.card, color: theme.color}]}
              keyboardType="email-address"
              placeholder='minatonamikaze@gmail.com'
            />
            <View style={styles.input_icon}>
              <Mail />
            </View>
          </View>
          <View style={styles.name_input}>
            <Text style={[styles.label, {color: theme.color}]}>Password</Text>
            <TextInput
              style={[styles.password_input, styles.passwordInput, {backgroundColor: theme.card, color: theme.color}]}
              secureTextEntry={!passwordVisible}
              placeholder='password'
            />
            <View style={styles.input_icon}>
              <Lock />
            </View>
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            >
              <FontAwesomeIcon
                icon={passwordVisible ? faEye : faEyeSlash}
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button buttonText="Create account" onPress={create} />
        <Text style={styles.or}>Or Using other Method</Text>
        <View style={styles.login_container}>
          {login_types.map((d) => (
            <TouchableOpacity style={styles.login_box} key={d.id}>
              {darkMode ? d.Dark_image : d.image}
              <Text style={[styles.login_type, {color: theme.color}]}>{d.text}</Text>
            </TouchableOpacity>
          ))}
          <Text style={[styles.bottom_text, {color:theme.color}]}>
            Already have an account? <Link style={styles.register} href="/login"> Login</Link>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Create_account;

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
    // Your header styles
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
  },
  input_container: {
    marginVertical: 30,
  },
  name_input: {
    marginBottom: 0,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
    color: '#070C18',
    padding: 5,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  input: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 13,
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: '#F6F6F6',
    position: 'relative',
  },
  input_icon: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  password_input: {
    position: 'relative',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 15,
    paddingVertical: 13,
    paddingLeft: 45,
    paddingRight: 55,
    backgroundColor: '#F6F6F6',
  },
  passwordInput: {
    paddingRight: 60,
  },
  eyeIcon: {
    position: 'absolute',
    bottom: 15,
    right: 18,
  },
  or: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Lato_400Regular',
    textAlign: 'center',
    color: '#757575',
    marginVertical: 25,
  },
  login_container: {
    gap: 20,
    marginBottom: 24, 
  },
  login_box: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#757575',
    justifyContent: 'center',
  },
  bottom_text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Lato_400Regular',
    color: '#121212',
    textAlign: 'center',
  },
  register: {
    color: '#D81159',
  }
});

export async function loadFonts() {
  await Font.loadAsync({
    'Montserrat_700Bold': Montserrat_700Bold,
    'Lato_400Regular': Lato_400Regular,
  });
}
