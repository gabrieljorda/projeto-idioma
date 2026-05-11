export const translations = {
  // Português do Brasil
  pt: {
    // Cabeçalho
    'app.title': 'Sistema Multilíngue',
    'app.subtitle': 'Aprendendo React Context API',
    
    // Navegação
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    
    // Conteúdo Principal
    'content.welcome': 'Bem-vindo ao nosso sistema!',
    'content.description': 'Este é um exemplo de aplicação React que utiliza Context API para gerenciar o idioma globalmente.',
    'content.feature1': '✅ Context API para estado global',
    'content.feature2': '✅ Troca de idioma em tempo real',
    'content.feature3': '✅ Componentes reutilizáveis',
    'content.feature4': '✅ TailwindCSS para estilização',
    'content.feature5': '✅ Sem prop drilling',
    
    // Cards
    'card.1.title': 'React Context API',
    'card.1.description': 'Gerencie estados globais sem passar props manualmente',
    'card.2.title': 'TailwindCSS',
    'card.2.description': 'Estilização rápida e responsiva',
    'card.3.title': 'Componentização',
    'card.3.description': 'Código organizado e reutilizável',
    
    // Rodapé
    'footer.current': 'Idioma atual',
    
    // Botões
    'button.learn': 'Saiba mais',
    'button.save': 'Salvar preferência',
    
    // Mensagens
    'message.changed': 'Idioma alterado para'
  },
  
  // Inglês
  en: {
    // Header
    'app.title': 'Multilingual System',
    'app.subtitle': 'Learning React Context API',
    
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Main Content
    'content.welcome': 'Welcome to our system!',
    'content.description': 'This is a React application example that uses Context API to manage language globally.',
    'content.feature1': '✅ Context API for global state',
    'content.feature2': '✅ Real-time language switching',
    'content.feature3': '✅ Reusable components',
    'content.feature4': '✅ TailwindCSS for styling',
    'content.feature5': '✅ No prop drilling',
    
    // Cards
    'card.1.title': 'React Context API',
    'card.1.description': 'Manage global states without manual prop passing',
    'card.2.title': 'TailwindCSS',
    'card.2.description': 'Fast and responsive styling',
    'card.3.title': 'Componentization',
    'card.3.description': 'Organized and reusable code',
    
    // Footer
    'footer.current': 'Current language',
    
    // Buttons
    'button.learn': 'Learn more',
    'button.save': 'Save preference',
    
    // Messages
    'message.changed': 'Language changed to'
  },
  
  // Espanhol
  es: {
    // Header
    'app.title': 'Sistema Multilingüe',
    'app.subtitle': 'Aprendiendo React Context API',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    
    // Main Content
    'content.welcome': '¡Bienvenido a nuestro sistema!',
    'content.description': 'Este es un ejemplo de aplicación React que utiliza Context API para gestionar el idioma globalmente.',
    'content.feature1': '✅ Context API para estado global',
    'content.feature2': '✅ Cambio de idioma en tiempo real',
    'content.feature3': '✅ Componentes reutilizables',
    'content.feature4': '✅ TailwindCSS para estilizar',
    'content.feature5': '✅ Sin prop drilling',
    
    // Cards
    'card.1.title': 'React Context API',
    'card.1.description': 'Gestiona estados globales sin pasar props manualmente',
    'card.2.title': 'TailwindCSS',
    'card.2.description': 'Estilización rápida y responsiva',
    'card.3.title': 'Componentización',
    'card.3.description': 'Código organizado y reutilizable',
    
    // Footer
    'footer.current': 'Idioma actual',
    
    // Buttons
    'button.learn': 'Aprende más',
    'button.save': 'Guardar preferencia',
    
    // Messages
    'message.changed': 'Idioma cambiado a'
  }
};

// Lista de idiomas disponíveis
export const availableLanguages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷', native: 'Português' },
  { code: 'en', name: 'English', flag: '🇺🇸', native: 'English' },
  { code: 'es', name: 'Español', flag: '🇪🇸', native: 'Español' }
];

// Função helper para pegar traduções
export function translate(lang, key) {
  return translations[lang]?.[key] || key;
}