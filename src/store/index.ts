import {
  type Store as VuexStore,
  createStore,
  type CommitOptions,
  type DispatchOptions,
} from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import mutations from './mutations';
import state from './state';
import type { State } from './types';
import type { Actions } from './types/actions-types';
import type { Getters } from './types/getters-types';
import type { Mutations } from './types/mutations-types';

const store = createStore({
  state,
  getters,
  mutations,
  actions,
});

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export default store;
