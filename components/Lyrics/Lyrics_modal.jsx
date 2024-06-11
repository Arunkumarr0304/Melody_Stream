import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


const LyricsModal = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalHeading}>Lyrics</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.lyricsText}>
                    I call you when I need you, my heart's on fire You come to me, come to me wild and wild When you come to me  Give me everything I need Give me a lifetime promises and a world of dreams Speak a language of love like you know what it means And it can't be wrong Take my heart and make it strong baby
                    </Text>
                    </ScrollView>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default LyricsModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#757575',
        padding: 20,
        marginHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeading: {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'Montserrat_700Bold',
        color: '#ffffff',
        marginBottom: 20,
    },
    lyricsText: {
        fontSize: 18,
        lineHeight: 20,
        fontFamily: 'Lato_400Regular',
        color: '#ffffff',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#D81159',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
