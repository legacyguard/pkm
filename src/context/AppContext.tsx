import React, { createContext, useState } from 'react';

interface AppContextProps {
  value: string;
  setValue: (v: string) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [value, setValue] = useState('');
  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  );
};
