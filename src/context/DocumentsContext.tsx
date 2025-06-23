import React, { createContext, useContext, useState } from 'react';
import { Document } from '@/types';

interface DocumentsContextValue {
  documents: Document[];
  addDocument: (doc: Document) => void;
}

const DocumentsContext = createContext<DocumentsContextValue | undefined>(undefined);

export function DocumentsProvider({ children }: React.PropsWithChildren) {
  const [documents, setDocuments] = useState<Document[]>([]);

  const addDocument = (doc: Document) => {
    setDocuments((prev) => [...prev, doc]);
  };

  return (
    <DocumentsContext.Provider value={{ documents, addDocument }}>
      {children}
    </DocumentsContext.Provider>
  );
}

export function useDocuments() {
  const ctx = useContext(DocumentsContext);
  if (!ctx) throw new Error('useDocuments must be used within DocumentsProvider');
  return ctx;
}
