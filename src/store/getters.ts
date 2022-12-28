import type { GetterTree } from 'vuex';
import type { State } from './types';
import type { Getters } from './types/getters-types';

export const getters: GetterTree<State, State> & Getters = {
  posts: (state) => {
    return state.posts;
  },
  loading: (state) => {
    return state.isLoading;
  },
  fetchError: (state) => {
    return state.fetchError;
  },
};
