import { Helmet } from "react-helmet";
import Script from "react-load-script";
import { Outlet } from "react-router-dom";
import Header from "../../custom/Layout/Header";
import Footer from "../../custom/Layout/Footer";
function LandingLayout() {
  return (
    <div>
      <Helmet>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/assets/icons/icon.png"
        />
        <link href="/assets/vendor/animate/animate.css" rel="stylesheet" />
        <link
          href="/assets/vendor/magnific-popup/magnific-popup.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link
          className="skin"
          rel="stylesheet"
          href="/assets/css/skin/skin-1.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="page-wraper">
        <Header />
        <div className="page-content">
          <Outlet />
          <Footer />
        </div>
      </div>

      <Script url="/assets/js/jquery.min.js"></Script>
      <Script url="/assets/js/anm.js"></Script>
      <Script url="/assets/vendor/wow/wow.js"></Script>
      <Script url="/assets/vendor/swiper/swiper-bundle.min.js"></Script>
      <Script url="/assets/vendor/scholarvault/js/scholarvault.bundle.min.js"></Script>
      <Script url="/assets/vendor/magnific-popup/magnific-popup.js"></Script>
      <Script url="/assets/js/dz.carousel.js"></Script>
      <Script url="/assets/js/dz.ajax.js"></Script>
    </div>
  );
}

export default LandingLayout;
