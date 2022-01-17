import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppTermek from "./AppTermek";
import Receptek from "./Receptek";

function fomenu_lap({ navigation }) {
  return (
    <AppTermek/>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Vissza" />
    </View>
  );
}

function receptek({ navigation }) {
  return (
    <Receptek/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Főmenü">
        <Drawer.Screen name="Főmenü" component={fomenu_lap} />
        <Drawer.Screen name="Értesítések" component={NotificationsScreen} />
        <Drawer.Screen name="Receptek" component={receptek} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
