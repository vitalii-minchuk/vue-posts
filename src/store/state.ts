import type { State } from './types';

const state: State = {
  posts: [],
  isLoading: false,
  fetchError: '',
  totalPages: 0,
  searchStr: '',
};

export default state;
