export interface Thought {
  text: string;
  author: string;
  id: string;
  createdAt: string;
}

export interface User {
  username: string;
  thoughts: Thought[];
  favoriteThoughts: Thought[];
}

export interface Error {
  message: string;
}
