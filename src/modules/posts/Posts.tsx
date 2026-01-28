import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { fetchPostsRequest, PostType } from './postsSlice';
import { useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import Post from './Post';
import PostSkeleton from './PostSkeleton';

export default function Posts() {
  const { posts, loading, error } = useAppSelector((state) => state?.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <Stack gap={3}>
      {error && error}
      {loading ? <PostSkeleton /> : posts?.map((post: PostType) => <Post key={post.id} post={post} />)}
    </Stack>
  );
}
