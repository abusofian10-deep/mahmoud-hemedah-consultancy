import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { translations, type Locale, type Dict } from './translations';

interface I18nContextValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  t: Dict;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'site-locale';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    return stored ?? 'en';
  });

  const dir: 'ltr' | 'rtl' = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = dir;
    root.dataset.locale = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, dir]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      dir,
      t: translations[locale],
      setLocale: setLocaleState,
      toggleLocale: () => setLocaleState((l) => (l === 'en' ? 'ar' : 'en')),
    }),
    [locale, dir]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
