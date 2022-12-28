import type { ActionTree } from 'vuex';
import type { State } from './state';
import { ActionTypes, type Actions } from './types/actions-types';
import { MutationTypes } from './types/mutations-types';

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_COUTNER]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 256;
        commit(MutationTypes.SET_COUNTER, data);
        resolve(data);
      }, 500);
    });
  },
};
