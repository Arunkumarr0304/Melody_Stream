import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { Montserrat_700Bold, Lato_400Regular } from '@expo-google-fonts/inter';
import Profile from "../../assets/images/profile.svg";
import Mail from "../../assets/images/sms.svg";
import Lock from "../../assets/images/lock.svg";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import { Lato_700Bold } from '@expo-google-fonts/lato';
import { login_types } from '../../components/Data/Data';
import { Link, router } from "expo-router";
import Back from "../../assets/images/back.svg";
import Tick from "../../assets/images/green_tick.svg";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [passwordVisible3, setPasswordVisible3] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
    };
    const togglePasswordVisibility3 = () => {
        setPasswordVisible3(!passwordVisible3);
    };
    const handleSubmit = () => {
        setIsModalVisible(true);
    };
    const handleSubmit2 = () => {
        setIsModalVisible2(true);
    };

    const genrus =() => {
        router.push('genrus');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Login Account</Text>
            </View>
            <Text style={styles.head_text}>Login to access your personalized music collection and playlists anytime, anywhere.</Text>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.input_container}>
                    <View style={styles.name_input}>
                        <Text style={styles.label}>Email Or Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            placeholder='minatonamikaze@gmail.com'
                        />
                        <View style={styles.input_icon}>
                            <Mail />
                        </View>
                    </View>
                    <View style={styles.name_input}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={[styles.password_input, styles.passwordInput]}
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
                <Text style={styles.forget} onPress={handleSubmit}>Forgot password</Text>
                <Button buttonText="login" />
                <Text style={styles.or}>Or Using other Method</Text>
                <View style={styles.login_container}>
                    {login_types.map((d) => (
                        <View style={styles.login_box} key={d.id}>
                            {d.image}
                            <Text style={styles.login_type}>{d.text}</Text>
                        </View>
                    ))}
                    <Text style={styles.bottom_text}>
                        Already have an account? <Link style={styles.register} href="/create_account">Register</Link>
                    </Text>
                </View>
            </ScrollView>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modal_inner}>
                            <View style={styles.modal_header}>
                                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                    <Back />
                                </TouchableOpacity>
                                <Text style={styles.modal_heading}>Forgot Password</Text>
                            </View>
                            <Text style={styles.modal_text}>Enter your email address below and we'll help you reset your password.</Text>
                        </View>
                        <View style={styles.forget_input_container}>
                            <View style={styles.name_input}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="email-address"
                                    placeholder='minatonamikaze@gmail.com'
                                />
                                <View style={styles.input_icon}>
                                    <Mail />
                                </View>
                                <View style={styles.input_icon2}>
                                    <Tick />
                                </View>
                            </View>
                        </View>
                        <Button buttonText="continue" onPress={handleSubmit2} />
                    </View>

                </View>
            </Modal>
            <Modal
                transparent={true}
                visible={isModalVisible2}
                onRequestClose={() => setIsModalVisible2(false)}
            >
                        <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                        <View style={styles.modal_header2}>
                                <TouchableOpacity onPress={() => setIsModalVisible2(false)}>
                                    <Back />
                                </TouchableOpacity>
                                <Text style={styles.modal_heading2}>Create New Password</Text>
                            </View>
                            <Text style={styles.modal_text}>Ensure your account's security with a strong, unique password.</Text>
                            <View style={styles.forget_input_container}>
                            <View style={styles.name_input}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={[styles.password_input, styles.passwordInput]}
                            secureTextEntry={!passwordVisible2}
                            placeholder='password'
                        />
                        <View style={styles.input_icon}>
                            <Lock />
                        </View>
                        <TouchableOpacity
                            onPress={togglePasswordVisibility2}
                            style={styles.eyeIcon}
                        >
                            <FontAwesomeIcon
                                icon={passwordVisible2 ? faEye : faEyeSlash}
                                size={24}
                                color="#888"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.name_input}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={[styles.password_input, styles.passwordInput]}
                            secureTextEntry={!passwordVisible3}
                            placeholder='password'
                        />
                        <View style={styles.input_icon}>
                            <Lock />
                        </View>
                        <TouchableOpacity
                            onPress={togglePasswordVisibility3}
                            style={styles.eyeIcon}
                        >
                            <FontAwesomeIcon
                                icon={passwordVisible3 ? faEye : faEyeSlash}
                                size={24}
                                color="#888"
                            />
                        </TouchableOpacity>
                    </View>
                        </View>
                        <View style={styles.button_box}>
                            <Button buttonText="submit" onPress={genrus} />
                        </View>
                        </View>
                        </View>
            </Modal>
        </View>
    );
};

export default Login;

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
        marginTop: 30,
        marginBottom: 24,
    },
    forget_input_container: {
        marginBottom: 24,
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
    input_icon2: {
        position: 'absolute',
        bottom: 15,
        right: 15,
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
    forget: {
        textAlign: 'right',
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '500',
        color: '#D81159',
        marginBottom: 30,
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
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modal_inner: {
        alignItems: 'center',
    },
    modal_header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 25,
    },
    modal_header2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 25,
    },
    modal_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
    },
    modal_heading2: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
    },
    modal_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        fontWeight: '400',
        color: '#757575',
        marginBottom: 40,
    },
});

