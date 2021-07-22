import { createApp } from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'


import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader'

// Vue.use(VueRouter)

// const routes = [
//   { path: "/", component: App },
//   { path: "/posts", component: posts }
// ]
// const router = new VueRouter({
//   routes: routes
// })

Amplify.configure(aws_exports)
applyPolyfills().then(() => {
  defineCustomElements(window)
})
createApp(App).mount('#app')
