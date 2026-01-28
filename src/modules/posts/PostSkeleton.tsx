import { Card, Placeholder, Stack } from 'react-bootstrap';

export default function PostSkeleton() {
  return (
    <Card style={{ maxWidth: '44rem' }}>
      <Stack direction='horizontal' className='align-items-start'>
        <Placeholder animation='wave' className='ms-3 mt-3'>
          <Placeholder as={Card.Img} variant='left' width={50} height={50} />
        </Placeholder>
        <Card.Body>
          <Placeholder animation='wave'>
            <Placeholder as={Card.Title} xs={8} />
          </Placeholder>
          <Placeholder as={Card.Title} animation='wave'>
            <Placeholder xs={4} />
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
          <Placeholder.Button variant='outline-primary' className='mt-3' xs={3} />
        </Card.Body>
      </Stack>
    </Card>
  );
}
