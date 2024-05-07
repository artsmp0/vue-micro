<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const dynamicComponent = defineAsyncComponent(() => import(`../views/${route.query.component}.vue`))
</script>

<template>
  <component :is="dynamicComponent" />
</template>
