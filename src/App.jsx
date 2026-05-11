import {Header} from './components/Header';
import {LanguageSelector} from './components/LanguageSelector';
import {MainContent} from './components/MainContent';
import {Footer} from './components/Footer';
import {Notification} from './components/Notification';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Seletor de Idioma */}
      <div className="container mx-auto px-4 py-6">
        <LanguageSelector />
      </div>
      
      <MainContent />
      <Footer />
      <Notification />
    </div>
  );
}