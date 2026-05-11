import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const { t } = useLanguage();
  
  return (
    <header className="bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          {/* Logo */}
          <div className="text-5xl mb-3">
            🌐
          </div>
          
          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t('app.title')}
          </h1>
          
          {/* Subtítulo */}
          <p className="text-sm md:text-base opacity-90">
            {t('app.subtitle')}
          </p>
        </div>
      </div>
    </header>
  );
}