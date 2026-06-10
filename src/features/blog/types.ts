export type PostCategory = {
  id: number;
  title: string;
};

export type Post = {
  id: number;
  category: PostCategory;
  image: string;
  title: string;
  content: string;
  created_datetime: string;
};

export type PostsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
};
