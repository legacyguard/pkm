import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '@/screens/DashboardScreen';
import AddDocumentScreen from '@/screens/AddDocumentScreen';
import DocumentLibraryScreen from '@/screens/DocumentLibraryScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AddDocument" component={AddDocumentScreen} />
        <Stack.Screen name="DocumentLibrary" component={DocumentLibraryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
