import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import { defaults, customAliases } from '@/plugins/defaults'

const customDarkTheme: ThemeDefinition = {
  dark: true,
  colors: { primary: '#FAAF20' }
}
const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#FAAF20',
    background: '#EFEFEF',
    white: '#FFFFFF'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'customLightTheme',
    themes: { customDarkTheme, customLightTheme }
  },
  // defaults,
  // aliases: customAliases,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})
