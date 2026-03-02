import { defineShikiSetup, ShikiSetupReturn } from '@slidev/types'

export default defineShikiSetup(async () => {
  return {
    themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
  } satisfies ShikiSetupReturn
})
