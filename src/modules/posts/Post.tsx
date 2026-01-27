import { Button, Card, Stack } from 'react-bootstrap';
import { PostType } from './postsSlice';
import { useState } from 'react';
import { Comments } from 'modules/comments';

interface Props {
  post: PostType;
}

export default function Post(props: Props) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const { post } = props;
  return (
    <Card>
      <Card.Body>
        <Stack direction='horizontal' gap={3}>
          <Card.Img src='https://react-bootstrap.netlify.app/img/logo.svg' variant='left' width={50} height={50} />
          <Stack gap={3}>
            <Stack>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button className='me-auto mt-3' variant='outline-primary' size='sm' onClick={toggleComments}>
                Comments
              </Button>
            </Stack>
            {showComments && <Comments postId={post.id} />}
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
}
