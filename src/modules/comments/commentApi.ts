import axios from 'axios';
import { CommentType } from './commentsSlice';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const commentsApi = {
  async fetchComments(postId: number): Promise<CommentType[]> {
    const response = await axios.get<CommentType[]>(`${API_URL}/posts/${postId}/comments`);
    return response.data;
  },
};
