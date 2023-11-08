<script setup lang="ts">
import { ref } from 'vue'
// import { VCard, VCardTitle, VCardText } from 'vuetify/components/VCard'
// import { VIcon } from 'vuetify/components/VIcon'
// import { VDialog } from 'vuetify/components/VDialog'
// import { VDivider } from 'vuetify/components/VDivider'
// import { VImg } from 'vuetify/components/VImg'

defineProps<{
  item: {
    title: string
    img: string
    bedrooms: string
    bathrooms: string
    garage: string
    size: string
  }
}>()

// import image from `@/assets/img/${props.img}`
const dialog = ref(false)
</script>
<template>
  <v-card rounded="xl" ripple @click="() => {}">
    <v-img :src="`/src/assets/img/${item.img}`" class="rounded-xl"></v-img>
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text class="d-flex align-center">
      <div class="pr-3 d-flex align-center">
        <v-icon class="pr-2" icon="mdi-bed-queen-outline"></v-icon>
        {{ item.bedrooms }}
      </div>
      <div class="pr-3 d-flex align-center">
        <v-icon class="pr-2" icon="mdi-shower"></v-icon>
        {{ item.bathrooms }}
      </div>
      <div class="pr-3 d-flex align-center">
        <v-icon class="pr-2" icon="mdi-car-outline"></v-icon>
        {{ item.garage }}
      </div>
      <div class="d-flex align-center">
        <v-icon class="pr-2" icon="mdi-arrow-expand-horizontal"></v-icon>
        {{ item.size }}
      </div>
    </v-card-text>

    <v-dialog v-model="dialog" max-width="700" activator="parent">
      <v-card rounded="xl">
        <v-img :src="`/src/assets/img/${item.img}`" class="rounded-xl"></v-img>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text class="d-flex align-center pb-10">
          <div class="pr-3 d-flex align-center">
            <v-icon class="pr-2" icon="mdi-bed-queen-outline"></v-icon>
            {{ item.bedrooms }}
          </div>
          <div class="pr-3 d-flex align-center">
            <v-icon class="pr-2" icon="mdi-shower"></v-icon>
            {{ item.bathrooms }}
          </div>
          <div class="pr-3 d-flex align-center">
            <v-icon class="pr-2" icon="mdi-car-outline"></v-icon>
            {{ item.garage }}
          </div>
          <div class="d-flex align-center">
            <v-icon class="pr-2" icon="mdi-arrow-expand-horizontal"></v-icon>
            {{ item.size }}
          </div>
        </v-card-text>
        <v-divider class="mx-5"></v-divider>
        <v-card-text>
          <v-img src="/src/assets/img/TEST_1.JPG"></v-img>
        </v-card-text>
      </v-card>
      <!-- <ProductDetailsDialog
        :product="product"
        :qty="qty"
        :add="add"
        :minus="minus"
        :loadingAdd="loadingAdd"
        :loadingMinus="loadingMinus"
        :close="() => (dialog = false)"
      /> -->
    </v-dialog>
  </v-card>
</template>
