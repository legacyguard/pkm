import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useDocuments } from '@/context/DocumentsContext';

export default function LibraryScreen() {
  const { documents } = useDocuments();
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={documents}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.filePath }} style={styles.thumb} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2}>{item.extractedText}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  item: { flexDirection: 'row', marginBottom: 12, alignItems: 'center' },
  thumb: { width: 60, height: 60, marginRight: 12 },
  info: { flex: 1 },
  title: { fontWeight: 'bold' },
});
