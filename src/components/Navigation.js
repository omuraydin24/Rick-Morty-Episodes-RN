import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import EpisodeDetail from "./pages/EpisodeDetail";
import Episodes from "./pages/Episodes";
import CharacterDetailPage from "./pages/CharacterDetailPage";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="MainScreen" component={Episodes} />
        <Stack.Screen name="DetailScreen" component={EpisodeDetail} />
        <Stack.Screen name="CharacterDetailPage" component={CharacterDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;
