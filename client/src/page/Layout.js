import Nav from '../component/Nav';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
