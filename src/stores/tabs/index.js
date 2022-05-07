import { defineStore } from 'pinia';
import state from './state';

const StoreTabs = defineStore('tabs', {
  state,
});

export default StoreTabs;
