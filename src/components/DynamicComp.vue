<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import { useOptions } from "../use-options";

const route = useRoute();
const options = useOptions();
const dynamicComponent = defineAsyncComponent(
  () =>
    // 这样不正常
    // import(
    //   `/@fs/src/${options.value.componentPath}/${route.query.component}.vue`
    // )
    // 这样正常
    import(`@/${options.value.componentPath}/${route.query.component}.vue`)
);
console.log(`/@fs/src/views/${route.query.component}.vue`, 123);
</script>

<template>
  <component :is="dynamicComponent" />
</template>
