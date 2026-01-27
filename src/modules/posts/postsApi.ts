import axios from 'axios';
import { PostType } from './postsSlice';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const postsApi = {
  async fetchPosts(): Promise<PostType[]> {
    const response = await axios.get<PostType[]>(`${API_URL}/posts`);
    return response.data;
  },
};
