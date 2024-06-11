import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Profile from "../../assets/images/home_profile.svg";
import { home_tab, top_data } from '../../components/Data/Data';
import Search from "../../assets/images/search.svg";
import Mic from "../../assets/images/mic.svg";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import Favourite from '../../components/Favourite/Favourite';
import Live from '../../components/Live/Live';
import ThemeContext from '../../theme/ThemeContext';

const Home = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [activeTab, setActiveTab] = useState(home_tab[0].id);
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={styles.header}>
                <Profile />
                <View style={styles.tab_container}>
                    {home_tab.map((d) => (
                        <TouchableOpacity 
                            style={[styles.tab, activeTab === d.id && styles.activeTab]}
                            key={d.id}
                            onPress={() => setActiveTab(d.id)}
                        >
                            <Text style={[styles.tab_text, activeTab === d.id && styles.activeTab_text]}>
                                {d.text}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            
            <View style={styles.search_input_container}>
                <TextInput
                    style={[styles.searchInput, {backgroundColor: theme.card, color: theme.color}]}
                    placeholder="Search"
                />
                <TouchableOpacity style={styles.search}>
                    <Search />
                </TouchableOpacity>
                <TouchableOpacity style={styles.mic}>
                    <Mic />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollstyles}>
            <View style={styles.head_row}>
                <Text style={[styles.heading, {color: theme.color}]}>Your Top Mixes</Text>
                <Text style={styles.see}>see all</Text>
            </View>
            <ScrollView style={styles.top_container} horizontal showsHorizontalScrollIndicator={false}>
                {top_data.map((data) => (
                    <View style={styles.top_box} key={data.id}>
                        <View style={styles.image_box}>
                            {data.image}
                            <TouchableOpacity 
                                style={styles.wishlist_icon}
                                onPress={() => toggleWishlist(data.id)}
                            >
                                {wishlist.includes(data.id) ? (
                                    <FontAwesomeIcon icon={faHeartSolid} size={24} color="#D81159" />
                                ) : (
                                    <FontAwesomeIcon icon={faHeart} size={24} color="#ffffff" />
                                )}
                            </TouchableOpacity>
                            <Text style={styles.image_text}>{data.heading}</Text>
                        </View>
                        <View style={styles.box_body}>
                            <Text style={[styles.box_body_heading, {color: theme.color}]}>{data.heading}</Text>
                            <Text style={styles.box_body_text}>playlist</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <Favourite />
            <Live />
            </ScrollView>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    tab_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    tab: {
        borderColor: '#D81159',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(216, 17, 89, 0.1)',
        paddingVertical: 8,
        paddingHorizontal: 14,
    },
    tab_text: {
        textTransform: 'capitalize',
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_700Bold',
        color: '#D81159',
    },
    activeTab: {
        backgroundColor: '#D81159',
    },
    activeTab_text: {
        color: '#ffffff',
    },
    search_input_container: {
        marginTop: 30,
        marginBottom: 24,
        position: 'relative',
    },
    searchInput: {
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingLeft: 45,
        paddingRight: 40,
    },
    search: {
        position: 'absolute',
        bottom: 18,
        left: 10,
    },
    mic: {
        position: 'absolute',
        bottom: 18,
        right: 10,
    },
    scrollstyles: {
        
    },
    top_container: {
        flexDirection: 'row',
    },
    top_box: {
        marginRight: 28,
        width: 150,
    },
    image_box: {
        position: 'relative',
    },
    wishlist_icon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    image_text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Montserrat_700Bold',
        fontWeight: '600',
        color: '#ffffff',
        textTransform: 'capitalize',
        position: 'absolute',
        textAlign: 'center',
        left: 15,
        top: 120,
    },
    box_body: {
        paddingVertical: 18,
        paddingHorizontal: 5,
    },
    box_body_heading: {
        fontSize: 14,
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
    head_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    see: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Lato_400Regular',
        color: '#FF7735',
        textTransform: 'capitalize',
    }
});
