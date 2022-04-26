<template>
<q-page>
  <div class="flex column">2
    <span>{{dataStore.counter}}</span>

    <div class="q-gutter-sm">
      <q-btn class="bg-green" @click="store.increment()">add</q-btn>
      <q-btn class="bg-red" @click="store.decrement()">dec</q-btn>
    </div>
  </div>

  <router-link to="/pagina2">Voltar</router-link>
</q-page>
</template>

<script setup>
import { counterStore } from 'src/stores/count';
import { useMeta } from 'quasar';

const store = counterStore();
const dataStore = store.$state;

const metaData = {
  title: 'Página 03',
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

</script>
