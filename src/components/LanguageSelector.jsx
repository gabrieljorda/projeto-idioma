import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export function LanguageSelector() {
  const { language, changeLanguage, availableLanguages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  // Encontra o idioma atual
  const currentLanguage = availableLanguages.find(lang => lang.code === language);
  
  return (
    <div className="relative">
      {/* Botão para abrir/fechar seletor */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border-2 border-blue-500 rounded-lg px-6 py-3 flex items-center space-x-3 hover:shadow-lg transition-all duration-300 mx-auto"
      >
        <span className="text-2xl">{currentLanguage?.flag}</span>
        <span className="font-semibold text-gray-700">
          {currentLanguage?.name}
        </span>
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Dropdown de idiomas */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-blue-50 transition-colors duration-200 ${
                language === lang.code ? 'bg-blue-100' : ''
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-800">
                  {lang.name}
                </div>
                <div className="text-xs text-gray-500">
                  {lang.native}
                </div>
              </div>
              {language === lang.code && (
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}