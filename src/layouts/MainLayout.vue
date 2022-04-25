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
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">

              <router-link :to="{name: menuItem.name}" class="links">
                <q-item clickable  >
                    <q-item-section avatar  id="nav">
                      <router-link :to="{name: menuItem.name}" class="links">
                      <q-icon :name="menuItem.icon" size="2em" />
                      </router-link>
                    </q-item-section>

                    <q-item-section id="nav">
                      <router-link :to="{name: menuItem.name}"
                      class="links">{{ menuItem.label }}</router-link>
                    </q-item-section>
                </q-item>
              </router-link>

              <q-separator v-if="menuItem.separator" />
            </template>
          </q-list>
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

const menuList = [
  {
    name: 'home', label: 'Home', icon: 'fa-solid fa-house', separator: true,
  },
  {
    name: 'pageTwo', label: 'Página 02', icon: 'fa-solid fa-newspaper', separator: false,
  },
  {
    name: 'pageThree', label: 'Página 03', icon: 'fa-solid fa-newspaper', separator: true,
  },
  {
    name: 'form', label: 'Fomulário', icon: 'fa-brands fa-wpforms', separator: false,
  },
];
</script >

<style scoped lang="scss">
  a { text-decoration: none; color: gray;}

  #nav .links.router-link-exact-active {
  color: #1976d2;
}
</style>
