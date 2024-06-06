import { View, Text } from 'react-native';
import React from 'react';
import {Stack} from "expo-router";



const AuthLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='create_account' options={{headerShown: false}} />
    <Stack.Screen name='login' options={{headerShown: false}} />
    <Stack.Screen name='verification' options={{headerShown: false}} />
    <Stack.Screen name='genrus' options={{headerShown: false}} />
   </Stack>
  )
}

export default AuthLayout;