import { Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <Stack className='p-3'>
      <Header />
      <Outlet />
    </Stack>
  );
}
