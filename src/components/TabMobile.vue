<template>
  <!-- <div class="q-pa-md"> -->
  <div >
      <!-- <div class="q-gutter-y-md" style="max-width: 600px"> -->
      <div class="no-margin">
        <q-card>
          <q-footer>
            <q-tabs
              v-model="storeData.tabs"
              dense
              class="text-grey"
              active-color="red"
              indicator-color="red"
              narrow-indicator
            >
              <q-tab name="Carro" label="Mails" icon="fa-solid fa-car" />
              <q-tab name="Alarms" label="Alarms" icon="alarm" />
              <q-tab name="Movies" label="Movies" icon="movie" />
            </q-tabs>
          </q-footer>
          <q-separator />

          <q-tab-panels v-model="storeData.tabs" animated>
            <q-tab-panel v-for="(tabPanel, index) in tabPanels" :key="index"
            :name="tabPanel.name">
              <div class="text-h6 bg-green">{{tabPanel.text}}</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
</template>

<script setup>
import StoreTabs from '../stores/tabs';

const store = StoreTabs();
const storeData = store.$state;

const tabPanels = [
  { name: 'Carro', text: 'Carro' }, { name: 'Alarms', text: 'Alarms' }, { name: 'Movies', text: 'Movies' }];

</script>
