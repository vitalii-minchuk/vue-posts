import type { Post, State } from '.';

export enum MutationTypes {
  SET_POSTS = 'SET_POSTS',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_FETCH_ERROR = 'SET_FETCH_ERROR',
  SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
  ADD_NEW_POST = 'ADD_NEW_POST',
  REMOVE_POST = 'REMOVE_POST',
  SET_SEARCH = 'SET_SEARCH',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_POSTS](state: S, payload: Array<Post>): void;
  [MutationTypes.SET_IS_LOADING](state: S, payload: boolean): void;
  [MutationTypes.SET_FETCH_ERROR](state: S, payload: string): void;
  [MutationTypes.SET_TOTAL_PAGES](state: S, payload: number): void;
  [MutationTypes.ADD_NEW_POST](state: S, payload: Post): void;
  [MutationTypes.REMOVE_POST](state: S, payload: number): void;
  [MutationTypes.SET_SEARCH](state: S, payload: string): void;
};
