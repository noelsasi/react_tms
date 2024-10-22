"use client";
import Script from "next/script";
import DashBoardHeader from "../components/Dashboard/Header";
import NavBar from "../components/Dashboard/NavBar";
import Footer from "../components/Dashboard/Footer";
import { useState } from "react";

function layout({ children }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const handleToggle = () => {
    setIsMenuToggled(!isMenuToggled);
  };
  return (
    <div>
      <>
        <div>
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
        </div>
      </>
      <div className={`main-wrapper ${isMenuToggled ? "menu-toggle" : ""}`}>
        <DashBoardHeader
          onToggle={handleToggle}
          isMenuToggled={isMenuToggled}
        />
        <NavBar />
        {children}
        <Footer />
      </div>

      <>
        <Script src="/dash/vendor/global/global.min.js"></Script>
        <Script src="/dash/vendor/scholarvault-select/dist/js/scholarvault-select.min.js"></Script>

        <Script src="/dash/vendor/chartjs/chart.bundle.min.js"></Script>
        <Script src="/dash/vendor/select2/js/select2.full.min.js"></Script>
        <Script src="/dash/js/plugins-init/select2-init.js"></Script>
        <Script src="/dash/vendor/peity/jquery.peity.min.js"></Script>
        <Script src="/dash/vendor/owl-carousel/owl.carousel.js"></Script>

        <Script src="/dash/js/custom.min.js"></Script>
        <Script src="/dash/js/dlabnav-init.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/scholarvault@5.1.3/dist/js/scholarvault.min.js"></Script>
      </>
    </div>
  );
}
export default layout;
