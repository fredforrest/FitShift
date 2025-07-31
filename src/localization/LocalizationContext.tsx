import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Translations } from './translations';

interface LocalizationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translations;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

interface LocalizationProviderProps {
  children: ReactNode;
  defaultLanguage?: string;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ 
  children, 
  defaultLanguage = 'da' // Default to Danish
}) => {
  const [language, setLanguage] = useState(defaultLanguage);
  
  const t = translations[language] || translations.da;

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
