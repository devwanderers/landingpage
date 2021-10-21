import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-locize-backend'
import { DateTime } from 'luxon'

const isProduction = process.env.NODE_ENV === 'production'

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escape: false,
            format: (value, format, lng) => {
                if (value instanceof Date) {
                    return DateTime.fromJSDate(value)
                        .setLocale(lng)
                        .toLocaleString(DateTime[format])
                }
                return value
            },
        },
        saveMissing: !isProduction,
    })
