<template>
  <div class="q-pt-md" style="max-width: 100px">
    <q-list
      dense bordered padding
      class="flex column rounded-borders items-center">
      <q-item clickable v-ripple v-for="n in 3" :key="n">
        <q-item-section  >
          <router-link :to="'/params-page/post'+n">Post {{n}}</router-link>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
