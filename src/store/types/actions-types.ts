import type { ActionContext } from 'vuex';
import type { State } from '../state';
import type { Mutations } from './mutations-types';

export enum ActionTypes {
  GET_COUTNER = 'GET_COUTNER',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.GET_COUTNER](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>;
}
