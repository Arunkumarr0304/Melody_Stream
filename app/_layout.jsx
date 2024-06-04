import { loadFonts } from '../app/(auth)/create_account'; 
import React,{useEffect} from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
  // call the loadFonts function before rendering the app
  useEffect(() => {
    loadFonts().then(() => {
      // Fonts have been loaded, start the app
      // ...
    });
  }, []);

  return (
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>

  );
};

export default RootLayout;