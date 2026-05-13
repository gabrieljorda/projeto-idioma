import { useLanguage } from '../contexts/LanguageContext';
import { Card } from './Card';



export function MainContent() {
  const { t } = useLanguage();  
  const features = [
    { key: 'feature1', icon: '⚛️' },
    { key: 'feature2', icon: '🔄' },
    { key: 'feature3', icon: '🧩' },
    { key: 'feature4', icon: '🎨' },
    { key: 'feature5', icon: '📦' }
  ];

  const cards = [
    { key: 'card.1', icon: '🎣' },
    { key: 'card.2', icon: '💨' },
    { key: 'card.3', icon: '🔧' }
  ];

  return (
    <main className="container mx-auto px-4 py-12">

      <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          {t('content.welcome')}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          {t('content.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-700">
              <span>{feature.icon}</span>
              <span>{t(`content.${feature.key}`)}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
        Tecnologias Utilizadas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={t(`${card.key}.title`)}
            description={t(`${card.key}.description`)}
          />
        ))}
      </div>

    </main>
  );
}