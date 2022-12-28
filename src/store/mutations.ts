import type { MutationTree } from 'vuex';
import type { State } from './types';
import { MutationTypes, type Mutations } from './types/mutations-types';

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_POSTS](state, payload) {
    state.posts = [...state.posts, ...payload];
  },
  [MutationTypes.SET_IS_LOADING](state, payload) {
    state.isLoading = payload;
  },
  [MutationTypes.SET_FETCH_ERROR](state, payload) {
    state.fetchError = payload;
  },
  [MutationTypes.SET_TOTAL_PAGES](state, payload) {
    state.totalPages = payload;
  },
  [MutationTypes.ADD_NEW_POST](state, payload) {
    state.posts = [payload, ...state.posts];
  },
  [MutationTypes.REMOVE_POST](state, payload) {
    state.posts = state.posts.filter((post) => post.id !== payload);
  },
};

export default mutations;
