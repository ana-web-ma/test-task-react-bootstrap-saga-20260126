import { Card, Stack } from 'react-bootstrap';

export default function Aboutpage() {
  return (
    <Stack gap={3}>
      <Card className='p-3'>
        <Stack direction='horizontal' className='flex-lg-row flex-column' style={{ alignItems: 'start' }} gap={3}>
          <Stack gap={3} className='order-lg-1 order-2 me-auto'>
            <Stack>
              <Card.Text>{`Hello, I'm Ana!`}</Card.Text>
              <Card.Text style={{ fontSize: '12px' }}>
                Frontend Developer (React / TypeScript / Redux Toolkit)
              </Card.Text>
            </Stack>
            <Stack>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Frontend developer focused on modern React stack: TypeScript, Redux Toolkit (RTK/RTK Query), Material
                UI. Experience building SPAs with clean state management and responsive UI.
              </Card.Text>
            </Stack>
            <Stack>
              <Card.Title>Skills</Card.Title>
              <Card.Text>TypeScript, React, Redux Toolkit, RTK Query, Material UI, React-Bootstrap.</Card.Text>
              <Card.Text>
                My experience in technical support and product analytics — including bug documentation, feature testing,
                and developer collaboration — provides me with a user-focused mindset essential for frontend
                development.
              </Card.Text>
            </Stack>
            <Card.Text>
              My goal is to transition into a full-time Frontend Developer position, leveraging my hands-on experience
              with the React ecosystem and my background in user-focused problem-solving.
            </Card.Text>
            <Card.Text>
              <Card.Link className='link-primary link-hover' href='https://github.com/ana-web-ma' target='_blank'>
                Git
              </Card.Link>
              <Card.Link
                className='link-primary link-hover'
                href='https://www.linkedin.com/in/mataeva-anastasia/'
                target='_blank'
              >
                Linkedin
              </Card.Link>
              <Card.Link className='link-primary link-hover' href='http://t.me/anamaweb' target='_blank'>
                Telegram
              </Card.Link>
            </Card.Text>
          </Stack>
          <Card.Img
            className='order-lg-2 order-1'
            style={{ maxWidth: '30%' }}
            src='https://cdn.discordapp.com/attachments/652386576839475219/1463575869636477143/067a9be78604a82983c7c405f0c9e109.jpg?ex=697254bf&is=6971033f&hm=821cca2ebe2200a5d2edad867b0d9a75a5f10acb473f40ba78700e09e47b379a&'
          />
        </Stack>
      </Card>
    </Stack>
  );
}
