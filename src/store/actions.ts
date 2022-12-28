import axios from 'axios';
import type { ActionTree } from 'vuex';
import { POSTS_PER_PAGE } from '../constants';
import type { Post, State } from './types';
import { ActionTypes, type Actions } from './types/actions-types';
import { MutationTypes } from './types/mutations-types';

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.CHANGE_IS_LOADING]({ commit }, payload) {
    commit(MutationTypes.SET_IS_LOADING, payload);
  },
  [ActionTypes.HANDLE_FETCH_ERROR]({ commit }, payload) {
    commit(MutationTypes.SET_FETCH_ERROR, payload);
  },
  [ActionTypes.HANDLE_TOTAL_PAGES]({ commit }, payload) {
    commit(MutationTypes.SET_TOTAL_PAGES, payload);
  },
  [ActionTypes.CREATE_POST]({ commit }, payload) {
    commit(MutationTypes.ADD_NEW_POST, payload);
  },
  [ActionTypes.DELETE_POST]({ commit }, payload) {
    commit(MutationTypes.REMOVE_POST, payload);
  },
  [ActionTypes.HANDLE_SEARCH]({ commit }, payload) {
    commit(MutationTypes.SET_SEARCH, payload);
  },
  async [ActionTypes.GET_POSTS]({ commit, dispatch }, payload) {
    try {
      dispatch(ActionTypes.CHANGE_IS_LOADING, true);
      const response = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _page: payload,
            _limit: POSTS_PER_PAGE,
          },
        }
      );

      const totalPosts = Number(response.headers['x-total-count']);
      const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

      dispatch(ActionTypes.HANDLE_TOTAL_PAGES, totalPages);

      commit(MutationTypes.SET_POSTS, response.data);
    } catch (error: any) {
      dispatch(
        ActionTypes.HANDLE_FETCH_ERROR,
        error.message || 'Something went wrong'
      );
    } finally {
      dispatch(ActionTypes.CHANGE_IS_LOADING, false);
    }
  },
};
