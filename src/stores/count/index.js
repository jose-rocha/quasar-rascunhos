import { defineStore } from 'pinia';
import state from './state';
import actions from './actions';

export const counterStore = defineStore('count', {
  state,
  actions,
});
