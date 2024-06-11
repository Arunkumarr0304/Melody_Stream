import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import Back from "../../assets/images/player_back.svg";
import { router } from "expo-router";
import Player from "../../assets/images/player_img.svg";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import Shuffle from "../../assets/images/white_shuffle.svg";
import Prev from "../../assets/images/player_prev.svg";
import Next from "../../assets/images/player_next.svg";
import Audio from "../../assets/images/audio.svg";
import Monitor from "../../assets/images/monitor.svg";
import Share from "../../assets/images/share.svg";
import LyricsModal from '../../components/Lyrics/Lyrics_modal'; 
import { width } from '@fortawesome/free-regular-svg-icons/faAddressBook';

const Music_player = () => {
    const [wishlist, setWishlist] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(300); // Assuming a 5-minute song for demo purposes
    const [isModalVisible, setIsModalVisible] = useState(false); // State for controlling modal visibility
    const id = 1; // Assuming each song has a unique ID, you need to replace this with the actual song ID

    const toggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const goback = () => {
        router.push('songs');
    };

    const togglePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    const handleSliderChange = (value) => {
        setCurrentTime(value);
    };

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.heading}>Connect</Text>
            </View>
            <View style={styles.image_box}>
                <Player />
            </View>
            <View style={styles.player_row}>
                <View style={styles.left_content}>
                    <Text style={styles.song_name}>Indie Music</Text>
                    <Text style={styles.singer}>J-Hope</Text>
                </View>
                <TouchableOpacity 
                    style={styles.wishlist_icon}
                    onPress={() => toggleWishlist(id)}
                >
                    {wishlist.includes(id) ? (
                        <FontAwesomeIcon icon={faHeartSolid} size={24} color="#64F059" />
                    ) : (
                        <FontAwesomeIcon icon={faHeart} size={24} color="#ffffff" />
                    )}
                </TouchableOpacity>
            </View>
            <View style={styles.music_player_container}>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={duration}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#FFFFFF"
                    value={currentTime}
                    onValueChange={handleSliderChange}
                />
                <View style={styles.play_times}>
                    <Text style={styles.time}>{Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}</Text>
                    <Text style={styles.time}>{Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}</Text>
                </View>
                <View style={styles.controls}>
                    <TouchableOpacity>
                        <Shuffle />
                    </TouchableOpacity>
                    <View style={styles.center_content}>
                        <TouchableOpacity>
                            <Prev />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={togglePlayPause}>
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size={32} color="#FFFFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Next />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Audio />
                    </TouchableOpacity>
                </View>
                <View style={styles.share_row}>
                    <TouchableOpacity>
                        <Monitor />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Share />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.lyrics_container} onPress={openModal}>
                <Text style={styles.lyrics}>Lyrics</Text>
            </TouchableOpacity>
            <LyricsModal visible={isModalVisible} onClose={closeModal} />
        </View>
    );
}

export default Music_player;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#D81159',
    },
    scrollView: {
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 70,
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        color: '#ffffff',
        textTransform: 'capitalize',
        fontFamily: 'Montserrat_700Bold',
    },
    image_box: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
    },
    player_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left_content: {
        flexDirection: 'column',
    },
    song_name: {
        fontSize: 26,
        lineHeight: 36,
        color: '#ffffff',
        fontFamily: 'Montserrat_700Bold',
    },
    singer: {
        fontSize: 18,
        lineHeight: 28,
        color: '#DDDDDD',
        fontFamily: 'Montserrat_400Regular',
    },
    wishlist_icon: {
        padding: 10,
    },
    music_player_container: {
        alignItems: 'center',
        marginTop: 20,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    center_content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    time: {
        color: '#DDDDDD',
        fontSize: 10,
        lineHeight: 13,
        fontFamily: 'Lato_400Regular',
    },
    play_times: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
    },
    share_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 40,
    },
    lyrics_container: {
        backgroundColor: '#757575',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginTop: 50,
    },
    lyrics: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        textTransform: 'capitalize',
    },
    
});
