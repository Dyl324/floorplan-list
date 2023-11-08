import { defineCustomElement } from 'vue'
import VueProductList from './components/ProductList.ce.vue'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

export const ProductList = defineCustomElement(VueProductList)

export function register(tagName = 'app') {
  // customElements.define(tagName, ProductList)
  const app = createApp(App)
  app.use(vuetify)
  app.mount(`#${tagName}`)
}

window.register = register
