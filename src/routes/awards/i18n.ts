import { init, register, waitLocale } from 'svelte-i18n'

register('ru', () => import('./locales/ru.json'))
register('en', () => import('./locales/en.json'))

init({
  fallbackLocale: 'en',
  initialLocale: 'en',
})

export const localeReady = waitLocale()
