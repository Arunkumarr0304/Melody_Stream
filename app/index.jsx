import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, StatusBar, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { pages } from "../components/Data/Data";
import { router } from "expo-router";
import Button from "../components/Button/Button";
import Pagination from "../components/Pagination/Pagination";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from "@expo-google-fonts/lato";

const { width, height } = Dimensions.get('window');

SplashScreen.preventAutoHideAsync();

export default function App() {
 
  const navigation = useNavigation();
  const swiperRef = useRef(null);
  const totalPages = pages.length;
  const [activePageIndex, setActivePageIndex] = useState(0);

  const [fontsLoaded] = useFonts({
    Kalam_400Regular,
    Kalam_700Bold,
    Montserrat_700Bold,
    Montserrat_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const headingOpacity = useRef(new Animated.Value(1)).current;
  const heading2Opacity = useRef(new Animated.Value(1)).current;
  const descriptionOpacity = useRef(new Animated.Value(1)).current;
  const paginationOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (fontsLoaded) {
      animateContent();
    }
  }, [activePageIndex, fontsLoaded]);

  const animateContent = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(heading2Opacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
      
      ]),
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(heading2Opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      ])
    ]).start();
  };

  const handleImageScroll = (event) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActivePageIndex(pageIndex);
  };

  const handleNextPress = () => {
    const nextIndex = Math.min(activePageIndex + 1, totalPages - 1);
    swiperRef.current.scrollTo({ x: nextIndex * width, animated: true });
    setActivePageIndex(nextIndex);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
    <StatusBar backgroundColor="rgba(0.8, 0.8, 0.8, 0.8)"  barStyle="light-content" />
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      ref={swiperRef}
      onScroll={handleImageScroll}
      scrollEventThrottle={16}
      contentContainerStyle={{ width: width * totalPages }}
      style={{ flex: 1 }}
    >
      {pages.map((page, index) => (
        <View key={index} style={[styles.page, { width }]}>
          <View style={styles.imageContainer}>
            {page.image}
          </View>
        </View>
      ))}
    </ScrollView>
    <View style={styles.onboard_content}>
      <Animated.Text style={[styles.heading, { opacity: headingOpacity }]}>
        {pages[activePageIndex].heading}
      </Animated.Text>
      <Animated.Text style={[styles.description, { opacity: descriptionOpacity }]}>
        {pages[activePageIndex].Text}
      </Animated.Text>
      <Animated.View style={{ opacity: paginationOpacity }}>
          <Pagination activePageIndex={activePageIndex} totalPages={totalPages} />
        </Animated.View>
      <View style={styles.page_button_container}>
        
        {activePageIndex === totalPages - 1 ? (
          <View style={{ paddingTop: 15 }}>
            <Button buttonText="Get started"
              backgroundColor="#FF7735"
              textColor='#FFFFFF'  
              onPress={() => router.push('create_account')}
            />
          </View>
        ) : (
          <View style={{ paddingTop: 15 }}>
            <Button buttonText="Next" backgroundColor="#FF7735" textColor='#ffffff' onPress={handleNextPress} />
          </View>
        )}
      </View>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  onboard_content: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 10,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heading: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '690',
    color: '#ffffff', 
    textAlign: 'center', 
    fontFamily: 'Montserrat_700Bold',  
    marginBottom: 18,
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#DDDDDD',
    textAlign: 'center',
    fontFamily: 'Lato_400Regular',
    marginBottom: 20,
  },
  page_button_container: {
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  nextButton: {
    backgroundColor: '#FF7735',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
