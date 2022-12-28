/// <reference types="vite/client" />
import { Store } from '../store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
  }
}

export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}
