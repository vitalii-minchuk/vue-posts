import type { ActionContext } from 'vuex';
import type { State } from '.';
import type { Mutations } from './mutations-types';

export enum ActionTypes {
  GET_POSTS = 'GET_POSTS',
  CHANGE_IS_LOADING = 'CHANGE_IS_LOADING',
  HANDLE_FETCH_ERROR = 'HANDLE_FETCH_ERROR',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.GET_POSTS](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
  [ActionTypes.CHANGE_IS_LOADING](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
  [ActionTypes.HANDLE_FETCH_ERROR](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
}
