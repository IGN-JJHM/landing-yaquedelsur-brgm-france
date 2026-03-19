import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { translations, type Locale } from '../i18n/translations';

const STORAGE_KEY = 'locale';

type Translations = typeof translations.es;

const I18nContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  raw: Translations;
} | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === 'es' || stored === 'fr' || stored === 'en')) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLocale);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale;
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const raw = translations[locale];

  return (
    <I18nContext.Provider
      value={{
        locale: mounted ? locale : 'es',
        setLocale,
        raw: mounted ? translations[locale] : translations.es,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return {
      locale: 'es' as Locale,
      setLocale: () => {},
      raw: translations.es,
    };
  }
  return ctx;
}
