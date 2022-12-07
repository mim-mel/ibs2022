import Nav from '../component/Nav';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
