import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { fetchPostsRequest, PostType } from './postsSlice';
import { useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import Post from './Post';

export default function Posts() {
  const posts = useAppSelector((state) => state?.posts?.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return <Stack gap={3}>{posts?.map((post: PostType) => <Post key={post.id} post={post} />)}</Stack>;
}
