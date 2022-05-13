<template>
  <q-btn>{{label}}</q-btn>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
});
</script>
