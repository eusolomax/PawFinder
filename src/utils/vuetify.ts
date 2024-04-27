// Vuetify
import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css'

// import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

const colors = {
}

const pawfinderTheme: ThemeDefinition = {
  dark: false,
  colors: colors
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'pawfinderTheme',
    themes: {
      pawfinderTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },

  defaults: {
    VBtn: {
      class: 'text-none',
    },
  }
})

export default vuetify
