import { Helmet } from "react-helmet";
import Script from "react-load-script";
import { Outlet } from "react-router-dom";

import Footer from "../../../components/custom/Dashboard/Footer";
import { useState } from "react";
import DashBoardHeader from "../../custom/Dashboard/Header";
import NavBar from "../../custom/Dashboard/NavBar";
function DashBoardLayout() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const handleToggle = () => {
    setIsMenuToggled(!isMenuToggled);
  };
  return (
    <div>
      <Helmet>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/dash/images/favicon.png"
        />

        <link
          href="/dash/vendor/scholarvault-select/dist/css/scholarvault-select.min.css"
          rel="stylesheet"
        />
        <link
          href="/dash/vendor/owl-carousel/owl.carousel.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/dash/vendor/select2/css/select2.min.css"
        />
        <link
          href="/dash/vendor/scholarvault-select/dist/css/scholarvault-select.min.css"
          rel="stylesheet"
        />

        <link href="/dash/css/style.css" rel="stylesheet" />
      </Helmet>
      <div className={`main-wrapper ${isMenuToggled ? "menu-toggle" : ""}`}>
        <DashBoardHeader
          onToggle={handleToggle}
          isMenuToggled={isMenuToggled}
        />
        <NavBar />
        <Outlet />
        <Footer />
      </div>
      <Script url="/dash/vendor/global/global.min.js"></Script>
      <Script url="/dash/vendor/scholarvault-select/dist/js/scholarvault-select.min.js"></Script>

      <Script url="/dash/vendor/chartjs/chart.bundle.min.js"></Script>
      <Script url="/dash/vendor/select2/js/select2.full.min.js"></Script>
      <Script url="/dash/js/plugins-init/select2-init.js"></Script>
      <Script url="/dash/vendor/peity/jquery.peity.min.js"></Script>
      <Script url="/dash/vendor/owl-carousel/owl.carousel.js"></Script>

      <Script url="/dash/js/custom.min.js"></Script>
      <Script url="/dash/js/dlabnav-init.js"></Script>
      <Script url="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></Script>
      <Script url="https://cdn.jsdelivr.net/npm/scholarvault@5.1.3/dist/js/scholarvault.min.js"></Script>
    </div>
  );
}

export default DashBoardLayout;
