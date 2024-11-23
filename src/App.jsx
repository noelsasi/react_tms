import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { SnackbarProvider } from 'notistack'
import './App.css'
import LandingLayout from './components/layouts/landing/LandingLayout'
import AuthLayout from './components/layouts/Auth/AuthLayout'
import Home from './components/pages/Landing/Home'
import Blog from './components/pages/Landing/blogs/Blog'
import About from './components/pages/Landing/about/About'
import Contact from './components/pages/Landing/contact/Contact'
import Search from './components/pages/Landing/search/Search'
import Thesis from './components/pages/Landing/thesis/Thesis'
import Signin from './components/pages/auth/signin/Signin'
import SignUp from './components/pages/auth/signup/SignUp'
import Forgot from './components/pages/auth/forgot/Forgot'
import Reset from './components/pages/auth/reset/Reset'
import DashBoardLayout from './components/layouts/Dashboard/DashBoardLayout'
import DashBoardHome from './components/pages/dashboard/admin/DashBoardHome'
import Manage_Guidelines from './components/pages/dashboard/admin/manage_guidelines/ManageGuidelines'
import Manage_Peer from './components/pages/dashboard/admin/manage_peer/ManagePeer'
import Manage_Thesis from './components/pages/dashboard/admin/manage_thesis/ManageThesis'
import Manage_users from './components/pages/dashboard/admin/manage_users/ManageUsers'
import Submit_Thesis from './components/pages/dashboard/admin/submit_thesis/SubmitThesis'
import Profile from './components/pages/dashboard/admin/profile/Profile'
import Search_Thesis from './components/pages/dashboard/admin/search_thesis/SearchThesis'
import My_Thesis from './components/pages/dashboard/user/my_thesis/MyThesis'
import Verify from './components/pages/auth/verify/Verify'
import Sendmail from './components/pages/auth/sendmail/Sendmail'
import { persistor, store } from './redux/store'
import Chat from './components/custom/Chat'
import LatestThesis from './components/pages/dashboard/admin/latest_thesis/LatestThesis'

function router() {
  return createBrowserRouter([
    {
      path: '/',
      element: <LandingLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'search', element: <Search /> },
        { path: 'contact', element: <Contact /> },
        { path: 'blog', element: <Blog /> },
        { path: 'thesis', element: <Thesis /> },
      ],
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: 'signin', element: <Signin /> },
        { path: 'forgot', element: <Forgot /> },
        { path: 'reset', element: <Reset /> },
        { path: 'signup', element: <SignUp /> },
        { path: 'verify', element: <Verify /> },
        { path: 'sendmail', element: <Sendmail /> },
      ],
    },
    {
      path: '/dashboard/admin',
      element: <DashBoardLayout />,
      children: [
        { index: true, element: <DashBoardHome /> },
        { path: 'manage_guidelines', element: <Manage_Guidelines /> },
        { path: 'manage_peer', element: <Manage_Peer /> },
        { path: 'manage_thesis', element: <Manage_Thesis /> },
        { path: 'manage_users', element: <Manage_users /> },
        { path: 'search_thesis', element: <Search_Thesis /> },
        { path: 'profile', element: <Profile /> },
        { path: 'chat', element: <Chat /> },
        { path: 'latest_details', element: <LatestThesis /> },
      ],
    },
    {
      path: '/dashboard/scholar',
      element: <DashBoardLayout />,
      children: [
        { index: true, element: <DashBoardHome /> },
        { path: 'manage_guidelines', element: <Manage_Guidelines /> },
        { path: 'manage_peer', element: <Manage_Peer /> },
        { path: 'manage_thesis', element: <Manage_Thesis /> },
        { path: 'submit_thesis', element: <Submit_Thesis /> },
        { path: 'search_thesis', element: <Search_Thesis /> },
        { path: 'profile', element: <Profile /> },
        { path: 'chat', element: <Chat /> },
        { path: 'latest_details', element: <LatestThesis /> },
      ],
    },
    {
      path: '/dashboard/user',
      element: <DashBoardLayout />,
      children: [
        { index: true, element: <DashBoardHome /> },
        { path: 'my_thesis', element: <My_Thesis /> },
        { path: 'submit_thesis', element: <Submit_Thesis /> },
        { path: 'search_thesis', element: <Search_Thesis /> },
        { path: 'profile', element: <Profile /> },
        { path: 'chat', element: <Chat /> },
        { path: 'latest_details', element: <LatestThesis /> },
      ],
    },
  ])
}

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading="Loading..." persistor={persistor}>
        <SnackbarProvider maxSnack={3}>
          <RouterProvider router={router()} />
        </SnackbarProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App
