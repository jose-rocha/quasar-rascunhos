<template>
  <q-page>
    <div v-for="(texto, index) in textos" :key="index" v-html="texto">
    </div>
  </q-page>
</template>

<script setup>
const textos = [
  'Lorem <b style="font-size: 150px;"> ipsum </b> dolor sit amet consectetur adipisicing elit.',
  'Quos animi delectus numquam ullam amet unde dolorem dignissimos',
  'omnis et aut consequuntur incidunt, nihil obcaecati natus modi odio atque nam voluptas.'];
</script>
