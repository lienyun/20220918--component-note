import { createApp } from 'vue'
import './style.css'
import App from './components/07.directive/App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'

const app = createApp(App)

// app.directive('focus', {
//   mounted(el) {
//     el.focus()
//   },
//   updated(el) {
//     el.focus()
//   }
// })

//如果mounted跟updated函數邏輯完全相同，可以簡寫
app.directive('focus', (el) => {
  el.focus()
})
app.mount('#app')
