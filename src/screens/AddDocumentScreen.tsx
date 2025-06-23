import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getTextFromFrame } from 'expo-text-recognition';
import { useDocuments } from '@/context/DocumentsContext';
import { Document, DocumentType } from '@/types';

export default function AddDocumentScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string>('');
  const { addDocument } = useDocuments();

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 0.8,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      const text = await getTextFromFrame(result.assets[0].uri);
      setRecognizedText(text.join('\n'));
    }
  };

  const handleSave = () => {
    if (!imageUri) return;
    const newDoc: Document = {
      id: Date.now().toString(),
      title: `Document ${Date.now()}`,
      type: DocumentType.OTHER,
      filePath: imageUri,
      extractedText: recognizedText,
      deadlines: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addDocument(newDoc);
    setImageUri(null);
    setRecognizedText('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="Capture Document" onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.preview} />}
      {recognizedText ? (
        <Text style={styles.text}>{recognizedText}</Text>
      ) : null}
      {imageUri && (
        <Button title="Save Document" onPress={handleSave} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  preview: { width: 200, height: 200, marginVertical: 10 },
  text: { marginVertical: 10 },
});
