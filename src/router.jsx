import App from './App'
import Manage from './pages/Manage/Manage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'
import MemberProfile from './pages/MemberProfile'

export default {
  routes: [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/manage',
      element: <Manage />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/forgot_password',
      element: <ForgotPassword />
    },
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/profile',
      element: <MemberProfile />
    }
  ]
}
