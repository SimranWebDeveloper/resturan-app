import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '@/screens/SearchScreen';
import AboutScreen from '@/screens/AboutScreen';
import HomeScreen from '@/screens/HomeScreen';
import ResultShowScreen from '@/screens/ResultShowScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen name="Axtaris edin" component={SearchScreen} />
        <Stack.Screen name="ResultShowScreen" component={ResultShowScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
