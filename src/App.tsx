import Layout from '@components/Layout';
import Mainpage from 'pages/Mainpage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Mainpage />} />
      </Route>
    </Routes>
  );
}

export default App;
