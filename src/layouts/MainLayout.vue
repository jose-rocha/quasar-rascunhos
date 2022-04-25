<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title >
          <router-link to="/" style="text-decoration: none;">
            <q-icon name="fa-brands fa-linux" size="2em" color="black" style="cursor: pointer;"/>
          </router-link>
        </q-toolbar-title>

        <div>
          <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
        </div>
      </q-toolbar>
    </q-header>

     <q-drawer
        side="right"
        v-model="drawerRight"
        bordered
        :width="200"
        :breakpoint="500"
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <div class="flex column q-pa-sm q-gutter-lg">
            <router-link v-for="(rota, index) in linkRoute" :key="index"
            :to="{name: rota.name}" class="flex justify-between" >
              <span class="text-h5">{{rota.label}}</span>
              <q-icon :name="rota.icon" size="2em" />
            </router-link>
          </div>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const drawerRight = ref(false);

const linkRoute = [
  { name: 'home', label: 'Home', icon: 'fa-solid fa-house' },
  { name: 'pageTwo', label: 'Página 02', icon: 'fa-solid fa-newspaper' },
  { name: 'pageThree', label: 'Página 03', icon: 'fa-solid fa-newspaper' },
  { name: 'form', label: 'Fomulário', icon: 'fa-brands fa-wpforms' },
];
</script >

<style scoped>
  a { text-decoration: none; color: gray;}
</style>
