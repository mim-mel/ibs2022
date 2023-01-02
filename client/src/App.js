import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import Layout from './page/Layout';
import Company from './page/Company';
import Labor from './page/Consulting/Labor';
import Tax from './page/Consulting/Tax';
import Edu from './page/Consulting/Edu';
import Hospital from './page/Consulting/Hospital';
import Ad from './page/Consulting/Ad';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} />
        <Route path='/labor' element={<Labor />} />
        <Route path='/tax' element={<Tax />} />
        <Route path='/hospital' element={<Hospital />} />
        <Route path='/edu' element={<Edu />} />
        <Route path='/ad' element={<Ad />} />
      </Route>
    </Routes>
  );
}

export default App;
