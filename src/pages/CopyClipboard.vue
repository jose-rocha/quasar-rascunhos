<template>
<q-page>
  <div>
    <div  >{{lorem}}</div>
    <q-btn @click="copyText" label="Copy" />

  </div>
</q-page>
</template>

<script setup >

const lorem = 'lorem ipsum';

const copyText = () => {
  try {
    navigator.clipboard.writeText(lorem);
  } catch (e) {
    window.console.log(e);
  }
};
</script>
