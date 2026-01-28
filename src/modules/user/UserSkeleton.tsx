import { Card, Placeholder } from 'react-bootstrap';

export default function UserSkeleton() {
  return (
    <Card style={{ maxWidth: '44rem' }}>
      <Card.Body>
        <Placeholder as={Card.Title} animation='wave'>
          <Placeholder xs={4} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={2} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={7} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
}
