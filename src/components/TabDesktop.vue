<template>
  <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
          <q-tabs
            v-model="storeData.tabs"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="Carro" label="Mails" />
            <q-tab name="Alarms" label="Alarms" />
            <q-tab name="Movies" label="Movies" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="storeData.tabs" animated>
            <q-tab-panel v-for="(tabPanel, index) in tabPanels" :key="index" :name="tabPanel.name">
              <div class="text-h6 bg-red">{{tabPanel.text}}</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
</template>

<script setup>
// import { ref } from 'vue';
import StoreTabs from '../stores/tabs';

const store = StoreTabs();
const storeData = store.$state;

// const tab = ref('carro');

const tabPanels = [
  { name: 'Carro', text: 'Carro' }, { name: 'Alarms', text: 'Alarms' },
  { name: 'Movies', text: 'Movies' }, { name: 'Movies', text: 'Movies' }];

</script>
