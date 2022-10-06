import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className="min-h-screen font-poppins">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
