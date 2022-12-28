import type { MutationTree } from 'vuex';
import type { State } from './types';
import { MutationTypes, type Mutations } from './types/mutations-types';

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_POSTS](state, payload) {
    state.posts = payload;
  },
  [MutationTypes.SET_IS_LOADING](state, payload) {
    state.isLoading = payload;
  },
  [MutationTypes.SET_FETCH_ERROR](state, payload) {
    state.fetchError = payload;
  },
};

export default mutations;
