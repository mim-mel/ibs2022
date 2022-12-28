import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import Consulting from './page/Consulting/Consulting';
import Layout from './page/Layout';
import Company from './page/Company';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} />
        <Route path='/consulting' element={<Consulting />} />
      </Route>
    </Routes>
  );
}

export default App;
