import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDocuments } from '@/context/DocumentsContext';

export default function HomeScreen() {
  const { documents } = useDocuments();
  const upcomingCount = documents.length;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>{`Documents captured: ${upcomingCount}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16 },
});
