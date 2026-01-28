import axios from 'axios';
import { UserType } from './userSlice';
import { PostType } from 'modules/posts';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const userApi = {
  async fetchUser(userId: number): Promise<UserType> {
    const response = await axios.get<UserType>(`${API_URL}/users/${userId}`);
    return response.data;
  },
  async fetchUserPost(userId: number): Promise<PostType[]> {
    const response = await axios.get<PostType[]>(`${API_URL}/users/${userId}/posts`);
    return response.data;
  },
};
