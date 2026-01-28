import { Card, Placeholder } from 'react-bootstrap';

export default function CommentSkeleton() {
  return (
    <Card>
      <Card.Body>
        <Placeholder as={Card.Title} animation='wave'>
          <Placeholder xs={4} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={6} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
}
