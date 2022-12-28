import type { State } from '../state';

export type Getters = {
  doubledCounter(state: State): number;
};
