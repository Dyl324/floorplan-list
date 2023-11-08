<script setup lang="ts">
import ProductList from './components/ProductList.ce.vue'
defineProps({
  rounded: {
    type: String,
    default: 'xl'
  }
})
</script>

<template>
  <div>
    <ProductList :rounded="rounded" />
  </div>
</template>
