// * Instalaciones Requeridas
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/material-top-tabs react-native-tab-view
// npx expo install react-native-pager-view

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from './src/screens/HomeScreen';
import { MessagesScreen } from './src/screens/MessagesScreen';
import { GroupsScreen } from './src/screens/GroupsScreen';
import { NavigationContainer } from '@react-navigation/native';

const TabNav = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <TabNav.Navigator initialRouteName='Home'>
          <TabNav.Screen name='Home' component={HomeScreen}/>
          <TabNav.Screen name='Messages' component={MessagesScreen}/>
          <TabNav.Screen name='Groups' component={GroupsScreen}/>
        </TabNav.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
