import type { Post, State } from '.';

export enum MutationTypes {
  SET_POSTS = 'SET_POSTS',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_FETCH_ERROR = 'SET_FETCH_ERROR',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_POSTS](state: S, payload: Array<Post>): void;
  [MutationTypes.SET_IS_LOADING](state: S, payload: boolean): void;
  [MutationTypes.SET_FETCH_ERROR](state: S, payload: string): void;
};
