export type State = {
  posts: Array<Post>;
  isLoading: boolean;
  fetchError: string;
  totalPages: number;
  searchStr: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
};
