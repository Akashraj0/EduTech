import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import NewsletterSignup from "../components/NewsLetter";
const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
        <NewsletterSignup />
      </div>
    </>
  );
};

export default Layout;
