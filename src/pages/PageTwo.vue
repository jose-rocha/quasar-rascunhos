<template>
<q-page class="q-px-md">
  <div class="flex column">
    <span>{{dataStore.counter}}</span>

    <div class="q-gutter-sm">
      <ButtonComponentVue label="add"  class="bg-green" @click="store.increment()" />
      <ButtonComponentVue label="dec"  class="bg-red" @click="store.decrement()" />
    </div>
  </div>

  <router-link to="/pagina3">Ir para página 3</router-link>

   <q-select v-model="valor" :options="valoresParcelas" label="Qtd. Parcelas"/>

  <div>valor total a pagar é: R${{200 / valor}}</div>

  <div class="q-mt-md">
    <q-input v-model="mudaValor.title" />
    <span >{{mudaValor.title}}</span>
  </div>

  <ListVue />
</q-page>
</template>

<script setup>
import { counterStore } from 'src/stores/count';
import { useMeta } from 'quasar';
import { ref, reactive } from 'vue';
import ButtonComponentVue from 'src/components/ButtonComponent.vue';
import ListVue from 'src/components/ListVue.vue';

const store = counterStore();
const dataStore = store.$state;

const valor = ref(1);
valor.value.toFixed(2);
const valoresParcelas = [1, 2, 3, 4, 5];

const metaData = {
  title: 'Página 02',
  titleTemplate: (title) => `${title}`,

};

const mudaValor = reactive({
  title: 'Usando o Reactive',
});
useMeta(metaData);
</script>
