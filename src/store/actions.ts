import axios from 'axios';
import type { ActionTree } from 'vuex';
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
  async [ActionTypes.GET_POSTS]({ commit, dispatch }) {
    try {
      dispatch(ActionTypes.CHANGE_IS_LOADING, true);
      const response = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            // _page: context.state.currentPage,
            _page: 1,
            // _limit: context.state.showPosts,
            _limit: 10,
          },
        }
      );

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
