import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) 
  .use(initReactI18next)
  .init({
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo
    interpolation: {
      escapeValue: false, // No escapar valores en HTML
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ruta donde i18next buscará los archivos
    },
  });

export default i18n;
