import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const TabIcon = ({ icon, color, library }) => {
  const IconComponent = library === 'FontAwesome' ? FontAwesome : MaterialIcons;
  return (
    <IconComponent
      name={icon}
      size={24}
      color={color}
    />
  );
};

const TabBarButton = ({ children, onPress, accessibilityState, title }) => {
  const isSelected = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        isSelected ? styles.activeTabButton : null
      ]}
    >
      {children}
      <Text style={[styles.tabTitle, isSelected ? styles.activeTabTitle : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FF7735',
          tabBarInactiveTintColor: '#757575',
          tabBarButton: (props) => (
            <TabBarButton {...props} title={route.name} />
          ),
          tabBarStyle: styles.tabBar,
          headerShown: false, // Ensure header is hidden
        })}
      >
        <Tabs.Screen 
          name="home" 
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <TabIcon icon="home" color={color} library="FontAwesome" />
            ),
          }} 
        />
        <Tabs.Screen 
          name="search" 
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => (
              <TabIcon icon="search" color={color} library="FontAwesome" />
            ),
          }} 
        />
        <Tabs.Screen 
          name="library" 
          options={{
            title: 'Library',
            tabBarIcon: ({ color }) => (
              <TabIcon icon="library-books" color={color} library="MaterialIcons" />
            ),
          }} 
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <TabIcon icon="user" color={color} library="FontAwesome" />
            ),
          }} 
        />
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  tabBar: {
    width: '100%',
    maxHeight: 65,
    height: '100%',
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingTop: 10, 
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tabTitle: {
    fontSize: 12,
    color: '#757575',
    marginTop: 4,
    textTransform: 'capitalize',
  },
  activeTabTitle: {
    color: '#FF7735',
  },
  activeTabButton: {
    
  },
});

export default TabsLayout;
