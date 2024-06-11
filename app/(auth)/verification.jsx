import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal } from 'react-native';
import React, { useState, useRef, useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_Back from "../../assets/images/dark_back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Link, router } from "expo-router";
import Verifications from "../../assets/images/verification.svg";
import { Lato_300Light, Lato_400Regular } from '@expo-google-fonts/lato';
import Button from '../../components/Button/Button';
import Success from "../../assets/images/success.svg";
import ThemeContext from '../../theme/ThemeContext';

const Verification = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const otpInputs = useRef([]);

    const continues = () => {
        router.push('genrus');
    };
    const back = () => {
        router.push('create_account');
    };

    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value !== '' && index < otp.length - 1) {
            otpInputs.current[index + 1].focus();
        }
    };

    const handleBackspace = (index, event) => {
        if (event.nativeEvent.key === 'Backspace') {
            const newOtp = [...otp];
            if (otp[index] !== '') {
                newOtp[index] = '';
                setOtp(newOtp);
                return;
            }
            if (index > 0) {
                newOtp[index - 1] = '';
                setOtp(newOtp);
                otpInputs.current[index - 1].focus();
            }
        }
    };

    const handleSubmit = () => {
        setIsModalVisible(true);
    };

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={back}>
                  {darkMode ? <Dark_Back /> :  <Back />}
                </TouchableOpacity>
                <Text style={[styles.heading, {color: theme.color}]}>Verification</Text>
            </View>
            <View style={styles.content}>
                <Verifications />
                <Text style={[styles.content_heading, {color: theme.color}]}>Verification Code</Text>
                <Text style={[styles.content_text, {color:theme.color}]}>We have sent the code verification to</Text>
                <Text style={[styles.content_text2, {color: theme.color}]}>minatonami****@gmail.com</Text>
            </View>
            <View style={styles.otp_block}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={[styles.input, {color: theme.color}]}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(value) => handleOtpChange(index, value)}
                        onKeyPress={(event) => handleBackspace(index, event)}
                        value={digit}
                        ref={(ref) => otpInputs.current[index] = ref}
                    />
                ))}
            </View>
            
                <Button buttonText="submit" onPress={handleSubmit} />
            
            <Text style={[styles.bottom_text, {color: theme.color}]}>Didn’t receive the code?<Text style={styles.resend}> Resend</Text></Text>
            
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={[styles.modalOverlay, {backgroundColor: theme.overlay}]}>
                    <View style={[styles.modalContent, {backgroundColor:theme.background}]}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
                            <Text style={[styles.closeButtonText, {color: theme.color}]}>X</Text>
                        </TouchableOpacity>
                        <View style={styles.modal_inner}>
                            <Success />
                            <Text style={[styles.modal_heading, {color:theme.color}]}>Register Success</Text>
                            <Text style={styles.modal_text}>Congratulation your account already created. Please login to get amazing experience.</Text>
                        </View>
                        <Button buttonText="continue" onPress={continues} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Verification;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        flex: 1, 
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 60,
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    content: {
        alignItems: 'center',
        marginTop: 50,
    },
    content_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        marginTop: 30,
        marginBottom: 24,
    },
    content_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
    },
    content_text2: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '500',
        color: '#121212',
    },
    input: {
        borderWidth: 1,
        borderRadius: 15,
        width: 70,
        height: 60,
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 30,
        color: '#000000',
        fontWeight: '700',
        backgroundColor: 'transparent',
        borderColor: '#DDDDDD',
    },
    otp_block: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 30,
        marginBottom: 140,
    },
    bottom_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
        textAlign: 'center',
        paddingVertical: 30,
    },
    resend: {
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
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 1,
    },
    closeButtonText: {
        fontSize: 20,
        color: '#000',
    },
    modal_inner: {
        alignItems: 'center',
    },
    modal_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        marginTop: 24,
        marginBottom: 16,
    },
    modal_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        fontWeight: '400',
        color: '#757575',
        textAlign: 'center',
        marginBottom: 40,
    },
});
