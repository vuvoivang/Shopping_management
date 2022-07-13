import { addLocaleData } from 'react-intl';
import localeEN from 'react-intl/locale-data/en';
import localeVI from 'react-intl/locale-data/vi';

import en from '../../localization/en.json';
import vi from '../../localization/vi.json';

addLocaleData([...localeEN, ...localeVI]);

const LANGUAGES = {
  en,
  vi
};

const DEFAULT_LOCALE = 'en';

const getLanguageMessages = (locale = DEFAULT_LOCALE) => { // Lấy locale hiện tại và load mảng các message tương ứng từ file .json
  const fallbackLocale = LANGUAGES[locale] ? locale : DEFAULT_LOCALE;
  return {
    locale: fallbackLocale,
    languageMessages: LANGUAGES[fallbackLocale]
  };
};

export { getLanguageMessages };
