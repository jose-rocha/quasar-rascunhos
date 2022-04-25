<template>
<q-page>
  <div class="flex column">2
    <span>{{dataStore.counter}}</span>

    <div class="q-gutter-sm">
      <q-btn class="bg-green" @click="store.increment()">add</q-btn>
      <q-btn class="bg-red" @click="store.decrement()">dec</q-btn>
    </div>
  </div>
  <router-link to="/pagina3">Ir para página 3</router-link>

</q-page>
</template>

<script setup>
import { counterStore } from 'src/stores/count';
import { useMeta } from 'quasar';

const store = counterStore();
const dataStore = store.$state;

const metaData = {
  title: 'Página 02',
  titleTemplate: (title) => `${title}`,

};

useMeta(metaData);
</script>
