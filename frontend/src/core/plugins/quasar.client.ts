import { defineNuxtPlugin } from '#app'
import {
  Quasar,
  QPage,
  QBtn,
  QBtnToggle,
  QToolbarTitle,
  QToolbar,
  QCard,
  QCardSection,
  QPageContainer,
  QDrawer,
  QLayout,
  QList,
  QHeader,
  QItemLabel,
  QIcon,
  QImg,
  QItemSection,
  QItem,
  QSeparator,
  QSpace,
  QAvatar,
  QInput,
  QSelect
} from 'quasar'

export default defineNuxtPlugin((nuxtApp) => {
  const quasarUserOptions = {
    components: {
      QPage,
      QBtn,
      QBtnToggle,
      QToolbarTitle,
      QToolbar,
      QCard,
      QCardSection,
      QPageContainer,
      QList,
      QLayout,
      QDrawer,
      QHeader,
      QItemLabel,
      QIcon,
      QImg,
      QItemSection,
      QItem,
      QSeparator,
      QSpace,
      QAvatar,
      QInput,
      QSelect
    },
    plugins: {}
  }

  nuxtApp.vueApp.use(Quasar, quasarUserOptions)
})
