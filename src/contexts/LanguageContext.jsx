import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, availableLanguages, translate } from '../data/translations';

const LanguageContext = createContext();

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de LanguageProvider');
  }
  return context;
}

// Componente Provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt'); 
  
  // Estado para mensagem de notificação
  const [notification, setNotification] = useState(null);
  
  // Efeito para salvar idioma no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem('app-language', language);
  }, [language]);
  
  
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    showNotification(`${translate(newLanguage, 'message.changed')} ${newLanguage.toUpperCase()}`);
  };
  
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  
 
    const t = (key) => {
    return translations[language]?.[key] || key;
  };
  
  // Função para resetar para o idioma padrão
  const resetToDefault = () => {
    setLanguage('pt');
    showNotification('Idioma redefinido para Português');
  };
  
  // Valor que será disponibilizado para toda a aplicação
  const value = {
    language,           
    changeLanguage,     // Função para mudar idioma
    t,                 // Função para traduzir textos
    notification,      // Mensagem de notificação
    resetToDefault,    // Função para resetar
    availableLanguages // Lista de idiomas disponíveis
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
