import { Button, Card, Stack } from 'react-bootstrap';
import { PostType } from './postsSlice';
import { useState } from 'react';
import { Comments } from 'modules/comments';
import { Link } from 'react-router-dom';

interface Props {
  post: PostType;
}

export default function Post(props: Props) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const { post } = props;
  const { body, title, userId, id } = post;
  return (
    <Card style={{ maxWidth: '44rem' }}>
      <Card.Body>
        <Stack className='align-items-start' direction='horizontal' gap={3}>
          <Link to={`/user/${userId}`}>
            <Card.Img
              src='https://react-bootstrap.netlify.app/img/logo.svg'
              variant='left'
              style={{ width: '50px', maxWidth: '50px' }}
            />
          </Link>
          <Stack gap={3}>
            <Stack>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{body}</Card.Text>
              <Button className='me-auto mt-3' variant='outline-primary' size='sm' onClick={toggleComments}>
                Comments
              </Button>
            </Stack>
            {showComments && <Comments postId={id} />}
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
}
