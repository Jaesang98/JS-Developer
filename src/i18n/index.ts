import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ko from './ko.json';

const resources = {
    en: { translation: en },
    ko: { translation: ko }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // 초기 언어 설정
    fallbackLng: 'en', // 사용할 언어가 없을 경우 기본값
    interpolation: {
        escapeValue: false // React는 자동으로 값을 이스케이프 처리하므로 비활성화
    }
});

export default i18n;
