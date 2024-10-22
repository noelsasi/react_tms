import Layout from "../components/Layout/Layout";
import Script from "next/script";

function LandingLayout({ children }) {
  return (
    <>
      <div>
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
      </div>
      <div>
        <Layout children={children} />
        <div>
          <Script src="/assets/js/jquery.min.js"></Script>
          <Script src="/assets/js/anm.js"></Script>
          <Script src="/assets/vendor/wow/wow.js"></Script>
          <Script src="/assets/vendor/swiper/swiper-bundle.min.js"></Script>
          <Script src="/assets/vendor/scholarvault/js/scholarvault.bundle.min.js"></Script>
          <Script src="/assets/vendor/magnific-popup/magnific-popup.js"></Script>
          <Script src="/assets/js/dz.carousel.js"></Script>
          <Script src="/assets/js/dz.ajax.js"></Script>
          {/* <Script src="/assets/js/custom.js"></Script> */}
        </div>
      </div>
    </>
  );
}

export default LandingLayout;
