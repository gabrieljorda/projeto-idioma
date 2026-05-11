import { useLanguage } from '../contexts/LanguageContext';

export function Notification() {
  const { notification } = useLanguage();
  
  if (!notification) return null;
  
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slideIn">
      <div className="bg-green-500 text-white rounded-lg shadow-2xl p-4 border-l-4 border-green-700">
        <div className="flex items-center space-x-2">
          <span>✅</span>
          <p className="font-semibold">{notification}</p>
        </div>
      </div>
    </div>
  );
}