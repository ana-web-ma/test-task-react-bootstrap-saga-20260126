import Layout from '@components/Layout';
import Mainpage from 'pages/Mainpage';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Userpage from 'pages/Userpage';
import Aboutpage from 'pages/Aboutpage';
import Notfoundpage from 'pages/Notfoundpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Mainpage />} />
        <Route path='user/:userId' element={<Userpage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='*' element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
}

export default App;
