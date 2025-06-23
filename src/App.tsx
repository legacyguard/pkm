import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simplified PKM App</Text>
      <Text style={styles.subtitle}>Never miss important deadlines</Text>
      <Text style={styles.description}>
        🚀 Your AI-powered document management assistant
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#1c1c1e',
  },
  subtitle: {
    fontSize: 18,
    color: '#007AFF',
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#8e8e93',
    textAlign: 'center',
  },
});
