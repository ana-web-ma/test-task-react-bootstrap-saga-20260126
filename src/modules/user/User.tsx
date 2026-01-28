import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { fetchUserRequest } from './userSlice';
import { Button, Card, Stack } from 'react-bootstrap';
import Post from 'modules/posts/Post';
import UserSkeleton from './UserSkeleton';

export default function User() {
  const { userId } = useParams();
  const { user, userPosts, error, loading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchUserRequest(Number(userId)));
  }, [userId, dispatch]);
  return (
    <Stack gap={3}>
      <Button className='me-auto' onClick={handleGoBack}>
        Back
      </Button>
      {error && error}
      {loading ? (
        <UserSkeleton />
      ) : (
        <>
          <Card style={{ maxWidth: '44rem' }}>
            <Card.Body>
              <Card.Title>name: {user?.name}</Card.Title>
              <Card.Text>username: {user?.username}</Card.Text>
              <Card.Text>email: {user?.email}</Card.Text>
              <Card.Text>phone: {user?.phone}</Card.Text>
              <Card.Text>website: {user?.website}</Card.Text>
            </Card.Body>
          </Card>
          <Stack gap={3}>{userPosts?.map((post) => <Post key={post.id} post={post} />)}</Stack>
        </>
      )}
    </Stack>
  );
}
