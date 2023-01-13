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
import Funds from './page/Service/Funds';
import Risks from './page/Service/Risks';
import Evaluation from './page/Service/Evaluation';
import CompanyX from './page/Service/CompanyX';
import CompanyBuild from './page/Service/CompanyBuild';
import Portfolio from './page/Portfolio/Portfolio';
import Conference from './page/Portfolio/Conference';
import Library from './page/Customer/Library';
import Form from './page/Customer/Form';
import Question from './page/Customer/Question';
import Contact from './page/Contact';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} />
        <Route path='/labor' element={<Labor />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/conference' element={<Conference />} />

        {/* 컨설팅 페이지들 */}
        <Route path='/tax' element={<Tax />} />
        <Route path='/hospital' element={<Hospital />} />
        <Route path='/edu' element={<Edu />} />
        <Route path='/ad' element={<Ad />} />
        <Route path='/funds' element={<Funds />} />

        {/* 서비스 페이지들 */}
        <Route path='/risks' element={<Risks />} />
        <Route path='/evaluation' element={<Evaluation />} />
        <Route path='/companybuild' element={<CompanyBuild />} />
        <Route path='/companyx' element={<CompanyX />} />
        <Route path='/companyx' element={<CompanyX />} />

        {/* customer 페이지들 */}
        <Route path='/library' element={<Library />} />
        <Route path='/form' element={<Form />} />
        <Route path='/question' element={<Question />} />

        {/* contact 페이지 */}
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
