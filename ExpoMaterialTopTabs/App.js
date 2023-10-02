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
        <TabNav.Navigator initialRouteName='Home' 
        backBehavior='initialRoute'                           //? A que pestaña ir al ir hacia atras
        tabBarPosition='top'                                  //? Posición de la barra de menú
        screenOptions={{                                      //* Configurar los estilos de todas las pantallas
          tabBarLabelStyle: { fontSize: 15 , paddingTop: 40}, //? Estilos generales para la tap Bar (El menú completo)
          //tabBarItemStyle: { width: 100 },                  //? Estilos para los Items de la tap Bar 
          lazy: true,                                         //? Define si todas las pantallas se cargan o no al iniciar la app
          lazyPreloadDistance:0,                              //? Define la distancia que tienen las pantallas que se van a pre cargar
        }}
        tapBarBounces                                         //? Scrollear de más rebota la tabBar  
                                                                      //! Solo para IOS

        >

          <TabNav.Screen name='Messages' component={MessagesScreen} options={{
            tabBarStyle:{backgroundColor: '#9C3037'},  //? Color del Fondo de toda la tap Bar
            tabBarInactiveTintColor: '#EC8087',        //? Color del Texto de los Items inactivos
            tabBarActiveTintColor: '#fff',             //? Color del Texto del Item activo
            tabBarIndicatorStyle:{
              backgroundColor: '#f11010'               //? Color de la barra de selección 
            }
          }}/>
          <TabNav.Screen name='Home' component={HomeScreen} options={{
            
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
