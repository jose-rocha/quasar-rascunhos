<template>
  <q-page class="flex flex-center column">
    <router-link to="/pagina2">Ir para página 02</router-link>

    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
      v-if="skeletonStatus"
    >
    <span class="q-mt-md text-h4" v-if="skeletonStatus">Framework Vue JS</span>

    <div class="q-pa-md" v-if="!skeletonStatus">
      <div class="q-gutter-md">
        <!-- <q-skeleton type="circle" size="100px" /> -->
        <!-- <q-skeleton width="150px" /> -->
        <q-skeleton height="150px" width="200px" />
        <!-- <q-skeleton size="50px" /> -->
        <!-- <q-skeleton width="200px" height="100px" /> -->
      </div>
    </div>

    <q-skeleton height="40px" width="300px" v-if="!skeletonStatus"/>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useMeta } from 'quasar';

const skeletonStatus = ref(false);

setTimeout(window.onload = () => {
  skeletonStatus.value = true;
}, 3000);

const metaData = {
  title: 'Home',
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

</script>
