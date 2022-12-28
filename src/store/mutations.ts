import type { MutationTree } from 'vuex';
import type { State } from './state';
import { MutationTypes, type Mutations } from './types/mutations-types';

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COUNTER](state, payload: number) {
    state.counter = payload;
  },
};

export default mutations;
