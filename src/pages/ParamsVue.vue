<template>
  <q-page>
    <div>params {{ $route.params.id }}</div>
     <div class="q-pa-md">
    <q-img
      src="https://placeimg.com/500/300/nature"
      spinner-color="red"
      style="height: 170px; "
      img-class="my-custom-image"
      class="rounded-borders"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        {{ $route.params.id }}
      </div>
    </q-img>
  </div>
  </q-page>
</template>

<!-- <script setup>
const n = 1;

window.console.log(n);
</script> -->
