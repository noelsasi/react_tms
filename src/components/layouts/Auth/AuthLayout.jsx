import { Helmet } from "react-helmet";
import Script from "react-load-script";
import { Outlet } from "react-router-dom";

function AuthLayout() {
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
        <link href="/dash/css/style.css" rel="stylesheet" />
      </Helmet>

      <Outlet />

      <Script url="/dash/vendor/global/global.min.js"></Script>
      <Script url="/dash/vendor/scholarvault-select/dist/js/scholarvault-select.min.js"></Script>
      <Script url="/dash/js/custom.min.js"></Script>
      <Script url="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
    </div>
  );
}

export default AuthLayout;
