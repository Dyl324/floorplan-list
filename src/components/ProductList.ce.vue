<script setup lang="ts">
// import { defineComponent } from 'vue'
// import vuetify from '../plugins/vuetify'
// import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'
import ProductCard from './ProductCard.vue'
// export default {
//   name: 'App',
//   vuetify,
//   components: { ProductCard },
//   data() {
//     return {
//       items: [
//         {
//           title: 'Waldorf',
//           img: 'HW-BoxHill-Waldorf-thumb.jpg',
//           bedrooms: '4',
//           bathrooms: '4.5',
//           garage: '2',
//           size: '13.8'
//         },
//         {
//           title: 'Glenburn',
//           img: 'Chisholm-Glenburn-thumb.jpg',
//           bedrooms: '4',
//           bathrooms: '2',
//           garage: '2',
//           size: '12.2'
//         },
//         {
//           title: 'Bristol',
//           img: 'HW-Leppington-Bristol-thumb.jpg',
//           bedrooms: '4-5',
//           bathrooms: '2.5-3',
//           garage: '2',
//           size: '10.0'
//         },
//         {
//           title: 'Hendooz',
//           img: 'BSX_SERIES_73_R1.png',
//           bedrooms: '4-5',
//           bathrooms: '2.5-3',
//           garage: '2',
//           size: '10.0'
//         }
//       ]
//     }
//   }
// }
// export default defineComponent({
//   // vuetify,
//   components: { ProductCard },
//   data() {
//     return {
//       items: [
//         {
//           title: 'Waldorf',
//           img: 'HW-BoxHill-Waldorf-thumb.jpg',
//           bedrooms: '4',
//           bathrooms: '4.5',
//           garage: '2',
//           size: '13.8'
//         },
//         {
//           title: 'Glenburn',
//           img: 'Chisholm-Glenburn-thumb.jpg',
//           bedrooms: '4',
//           bathrooms: '2',
//           garage: '2',
//           size: '12.2'
//         },
//         {
//           title: 'Bristol',
//           img: 'HW-Leppington-Bristol-thumb.jpg',
//           bedrooms: '4-5',
//           bathrooms: '2.5-3',
//           garage: '2',
//           size: '10.0'
//         },
//         {
//           title: 'Hendooz',
//           img: 'BSX_SERIES_73_R1.png',
//           bedrooms: '4-5',
//           bathrooms: '2.5-3',
//           garage: '2',
//           size: '10.0'
//         }
//       ]
//     }
//   }
// })
const items = [
  {
    title: 'Waldorf',
    img: 'HW-BoxHill-Waldorf-thumb.jpg',
    bedrooms: '4',
    bathrooms: '4.5',
    garage: '2',
    size: '13.8'
  },
  {
    title: 'Glenburn',
    img: 'Chisholm-Glenburn-thumb.jpg',
    bedrooms: '4',
    bathrooms: '2',
    garage: '2',
    size: '12.2'
  },
  {
    title: 'Bristol',
    img: 'HW-Leppington-Bristol-thumb.jpg',
    bedrooms: '4-5',
    bathrooms: '2.5-3',
    garage: '2',
    size: '10.0'
  },
  {
    title: 'Hendooz',
    img: 'BSX_SERIES_73_R1.png',
    bedrooms: '4-5',
    bathrooms: '2.5-3',
    garage: '2',
    size: '10.0'
  }
]
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="item in items" :key="item.title">
          <ProductCard :item="item" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <div style="display: flex; flex-wrap: wrap">
      <div
        v-for="item in items"
        :key="item.title"
        style="border: grey 1px solid; margin: 10px; padding: 10px; flex: 1"
      >
        {{ item.title }}
        <div style="display: flex">
          {{ item.bedrooms }} {{ item.bathrooms }} {{ item.garage }} {{ item.size }}
        </div>
      </div>
    </div> -->
  </div>
</template>
