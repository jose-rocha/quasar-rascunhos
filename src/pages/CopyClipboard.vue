<template>
<q-page>
  <div>
    <div  >{{lorem}}</div>
    <q-btn @click="copyText" label="Copy" />

  </div>

  <div class="flex column justify-center q-mt-md">
    <h5 class="text-center">Utilizando watch</h5>
    <span class="text-center">Valor de count {{count}}</span>

    <q-btn label="add" @click="() => count++" />
    <span v-if="msg" class="text-red text-center q-mt-sm">count chegou no limite</span>
  </div>
</q-page>
</template>

<script setup >
import { ref, watch } from 'vue';

const lorem = 'lorem ipsum';

const copyText = () => {
  try {
    navigator.clipboard.writeText(lorem);
  } catch (e) {
    window.console.log(e);
  }
};

const count = ref(0);
const msg = ref(false);

watch(() => count.value, () => {
  if (count.value === 5) {
    // alert(`count é ${count.value}`);
    msg.value = true;
  }
});
</script>
