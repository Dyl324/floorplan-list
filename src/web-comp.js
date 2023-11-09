// import { defineCustomElement } from 'vue'
// import VueProductList from './components/ProductList.ce.vue'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// export const ProductList = defineCustomElement(VueProductList)

function initFloorplans(tagName = 'floorplan-list', { rounded = 'xl' }) {
  console.log('REGISTERING APP')
  // customElements.define(tagName, ProductList)
  const app = createApp(App, { rounded })
  app.use(vuetify)
  app.mount(`#${tagName}`)
  console.log('APP REGISTERED')
}

window.initFloorplans = initFloorplans
