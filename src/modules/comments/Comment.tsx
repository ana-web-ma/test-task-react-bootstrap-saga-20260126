import { Card } from 'react-bootstrap';
import { CommentType } from './commentsSlice';

interface Props {
  comment: CommentType;
}

export default function Comment(props: Props) {
  const { comment } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{comment.email}</Card.Title>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
