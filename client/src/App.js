import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './page/Main';
import Consulting from './page/Consulting/Consulting';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/consulting' element={<Consulting/>}/>
    </Routes>
  );
}

export default App;
