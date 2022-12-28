export type State = {
  posts: Array<Post>;
  isLoading: boolean;
  fetchError: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
};
