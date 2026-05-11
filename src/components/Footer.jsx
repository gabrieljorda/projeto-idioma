import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { language, t, availableLanguages, resetToDefault } = useLanguage();
  
  const currentLang = availableLanguages.find(lang => lang.code === language);
  
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Informações */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <span>🌐</span>
              <span>{t('app.title')}</span>
            </h3>
            <p className="text-gray-400 text-sm">
              {t('content.description')}
            </p>
          </div>
          
          {/* Coluna 2 - Idioma Atual */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.current')}</h3>
            <div className="items-center space-x-3 bg-gray-800 rounded-lg p-3 inline-block">
              <span className="text-2xl">{currentLang?.flag}</span>
              <div>
                <div className="font-semibold text-white">{currentLang?.name}</div>
                <div className="text-sm text-gray-400">{currentLang?.native}</div>
              </div>
            </div>
          </div>
          
          {/* Coluna 3 - Ações */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ações</h3>
            <button
              onClick={resetToDefault}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              Redefinir para Padrão (PT)
            </button>
          </div>
        </div>
        
       
      </div>
    </footer>
  );
}