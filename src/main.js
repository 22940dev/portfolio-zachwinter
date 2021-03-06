import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'

import { faGithub, faInstagram, faLinkedin, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

[
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faMobile,
  faEnvelope,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegramPlane,
  faDesktopAlt,
  faPlay,
  faPause
].forEach(icon => library.add(icon))

Vue.component('icon', FontAwesomeIcon)

// eslint-disable-next-line 
if (PRODUCTION && GOOGLE_ANALYTICS) {
  Vue.use(VueAnalytics, {
    // eslint-disable-next-line 
    id: GOOGLE_ANALYTICS,
    router
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
