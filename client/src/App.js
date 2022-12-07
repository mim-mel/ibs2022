import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './page/Main';
import Consulting from './page/Consulting/Consulting';
import Layout from './page/Layout';

function App() {
  return (
    <Routes>
      <Route element={ <Layout/> }>
        <Route path='/' element={ <Main/> }/>
        <Route path='/consulting' element={ <Consulting/> }/>
      </Route>
    </Routes>
  );
}

export default App;
