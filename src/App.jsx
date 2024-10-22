import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingLayout from "./components/layouts/landing/LandingLayout";
import AuthLayout from "./components/layouts/Auth/AuthLayout";
import Home from "./components/pages/Landing/Home";
import Blog from "./components/pages/Landing/blogs/Blog";
import About from "./components/pages/Landing/about/About";
import Contact from "./components/pages/Landing/contact/Contact";
import Search from "./components/pages/Landing/search/Search";
import Signin from "./components/pages/auth/signin/Signin";
import SignUp from "./components/pages/auth/signup/SignUp";
import Forgot from "./components/pages/auth/forgot/Forgot";
import Reset from "./components/pages/auth/reset/Reset"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="reset" element={<Reset />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
