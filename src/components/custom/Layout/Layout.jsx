import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="page-wraper">
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
