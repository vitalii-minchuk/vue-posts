import type { Post, State } from '.';

export type Getters = {
  posts(state: State): Array<Post>;
  loading(state: State): boolean;
  fetchError(state: State): string;
  totalPages(state: State): number;
  post: (state: State) => (id: number) => Post | undefined;
};
