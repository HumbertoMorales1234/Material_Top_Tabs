// * Instalaciones Requeridas
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/material-top-tabs react-native-tab-view
// npx expo install react-native-pager-view

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
        <TabNav.Navigator initialRouteName='Home' screenOptions={{
          tabBarLabelStyle: { fontSize: 15 , paddingTop: 40},
          //tabBarItemStyle: { width: 100 },
          //tabBarStyle: { backgroundColor: 'powderblue' },
        }}>
          <TabNav.Screen name='Messages' component={MessagesScreen} options={{
            tabBarStyle:{backgroundColor: '#9C3037'},
            tabBarInactiveTintColor: '#EC8087',
            tabBarActiveTintColor: '#fff',
            tabBarIndicatorStyle:{
              backgroundColor: '#f11010'
            }
          }}/>
          <TabNav.Screen name='Home' component={HomeScreen} options={{
            //tabBarStyle:{backgroundColor: '#000000'}
          }}/>
          <TabNav.Screen name='Groups' component={GroupsScreen} options={{
            tabBarStyle:{backgroundColor: '#52454D'},
            tabBarInactiveTintColor: '#A2959D',
            tabBarActiveTintColor: '#fff',
            tabBarIndicatorStyle:{
              backgroundColor: '#2a131d'
            }
          }}/>
        </TabNav.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop: 40,
  },
});
