<template>
  <q-page>
    <TabDesktop v-if="$q.screen.gt.sm" />

    <!-- <q-footer> -->
      <TabMobile v-if="$q.screen.lt.md" />
    <!-- </q-footer> -->

  </q-page>
</template>

<script setup>
import TabDesktop from '../components/TabDesktop.vue';
import TabMobile from '../components/TabMobile.vue';

</script>
