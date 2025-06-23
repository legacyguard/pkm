import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from '@/navigation';
import { DocumentsProvider } from '@/context/DocumentsContext';

export default function App() {
  return (
    <DocumentsProvider>
      <RootNavigator />
      <StatusBar style="auto" />
    </DocumentsProvider>
  );
}
