import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AppBar from './screens/AppBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Accueil" 
        component={HomeScreen}
        options={{ 
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{ title: 'Mes Détails Personnalisés' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationContainer>
          <AppBar />

          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { backgroundColor: '#f0f0f0' },
              tabBarLabelStyle: { fontSize: 14 },
            }}
          >
            <Tab.Screen
              name="Maison"
              component={HomeStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Paramètres"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>

        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
