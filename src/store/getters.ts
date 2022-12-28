import type { GetterTree } from 'vuex';
import type { State } from './state';
import type { Getters } from './types/getters-types';

export const getters: GetterTree<State, State> & Getters = {
  doubledCounter: (state) => {
    return state.counter * 2;
  },
};
