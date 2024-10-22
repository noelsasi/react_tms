import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingLayout from "./components/layouts/landing/LandingLayout";
import AuthLayout from "./components/layouts/Auth/AuthLayout";
import Home from "./components/pages/Landing/Home";
import Blog from "./components/pages/Landing/blogs/Blog";
import About from "./components/pages/Landing/about/About";
import Contact from "./components/pages/Landing/contact/Contact";
import Search from "./components/pages/Landing/search/Search";
import Thesis from "./components/pages/Landing/thesis/Thesis";
import Signin from "./components/pages/auth/signin/Signin";
import SignUp from "./components/pages/auth/signup/SignUp";
import Forgot from "./components/pages/auth/forgot/Forgot";
import Reset from "./components/pages/auth/reset/Reset";
import DashBoardLayout from "./components/layouts/Dashboard/DashBoardLayout";
import DashBoardHome from "./components/pages/dashboard/admin/DashBoardHome";
import Manage_Guidelines from "./components/pages/dashboard/admin/manage_guidelines/ManageGuidelines";
import Manage_Peer from "./components/pages/dashboard/admin/manage_peer/ManagePeer";
import Manage_Thesis from "./components/pages/dashboard/admin/manage_thesis/ManageThesis";
import Manage_users from "./components/pages/dashboard/admin/manage_users/ManageUsers";
import Submit_Thesis from "./components/pages/dashboard/admin/submit_thesis/SubmitThesis";
import Profile from "./components/pages/dashboard/admin/profile/Profile";
import Search_Thesis from "./components/pages/dashboard/admin/search_thesis/SearchThesis";
import My_Thesis from "./components/pages/dashboard/user/my_thesis/MyThesis";
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
          <Route path="thesis" element={<Thesis />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="reset" element={<Reset />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/dashboard/admin" element={<DashBoardLayout />}>
          <Route index element={<DashBoardHome />} />
          <Route path="manage_guidelines" element={<Manage_Guidelines />} />
          <Route path="manage_peer" element={<Manage_Peer />} />
          <Route path="manage_thesis" element={<Manage_Thesis />} />
          <Route path="manage_users" element={<Manage_users />} />
          <Route path="search_thesis" element={<Search_Thesis />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard/scholar" element={<DashBoardLayout />}>
          <Route index element={<DashBoardHome />} />
          <Route path="manage_guidelines" element={<Manage_Guidelines />} />
          <Route path="manage_peer" element={<Manage_Peer />} />
          <Route path="manage_thesis" element={<Manage_Thesis />} />
          <Route path="submit_thesis" element={<Submit_Thesis />} />
          <Route path="search_thesis" element={<Search_Thesis />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard/user" element={<DashBoardLayout />}>
          <Route index element={<DashBoardHome />} />
          <Route path="my_thesis" element={<My_Thesis />} />
          <Route path="submit_thesis" element={<Submit_Thesis />} />
          <Route path="search_thesis" element={<Search_Thesis />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
