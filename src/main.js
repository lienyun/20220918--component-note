import { createApp } from 'vue'
import './style.css'
import App from './components/07.directive/App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'

const app = createApp(App)

app.directive('focus', {
  mounted(el) {
    el.focus()
  },
  updated(el) {
    el.focus()
  }
})
app.mount('#app')
