import { Card, Stack } from 'react-bootstrap';
import { PostType } from './postsSlice';

interface Props {
  post: PostType;
}

export default function Post(props: Props) {
  const { post } = props;
  return (
    <Card>
      <Card.Body>
        <Stack direction='horizontal' gap={3}>
          <Card.Img src='https://react-bootstrap.netlify.app/img/logo.svg' variant='left' width={50} height={50} />
          <Stack>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
}
