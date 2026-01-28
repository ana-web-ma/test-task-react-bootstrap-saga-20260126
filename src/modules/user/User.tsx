import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { fetchUserRequest } from './userSlice';
import { Card, Stack } from 'react-bootstrap';
import Post from 'modules/posts/Post';

export default function User() {
  const { userId } = useParams();
  const { user, userPosts, error, loading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest(Number(userId)));
  }, [userId]);
  return (
    <>
      {error && error}
      {loading ? (
        <div>Loading</div>
      ) : (
        <Stack gap={4}>
          <Card>
            <Card.Body>
              <Card.Title>name: {user?.name}</Card.Title>
              <Card.Text>username: {user?.username}</Card.Text>
              <Card.Text>email: {user?.email}</Card.Text>
              <Card.Text>phone: {user?.phone}</Card.Text>
              <Card.Text>website: {user?.website}</Card.Text>
            </Card.Body>
          </Card>
          <Stack gap={3}>{userPosts?.map((post) => <Post key={post.id} post={post} />)}</Stack>
        </Stack>
      )}
    </>
  );
}
