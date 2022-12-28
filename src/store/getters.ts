import type { GetterTree } from 'vuex';
import type { State } from './types';
import type { Getters } from './types/getters-types';

export const getters: GetterTree<State, State> & Getters = {
  posts: (state) => {
    const search = state.searchStr;
    return state.posts.filter((post) => post.title.includes(search));
  },
  loading: (state) => {
    return state.isLoading;
  },
  fetchError: (state) => {
    return state.fetchError;
  },
  totalPages: (state) => {
    return state.totalPages;
  },
  post: (state) => (id: number) => {
    return state.posts.find((post) => post.id === id);
  },
};
