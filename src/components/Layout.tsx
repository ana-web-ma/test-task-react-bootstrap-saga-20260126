import { Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Stack className='p-3'>
      Layout
      <Outlet />
    </Stack>
  );
}
