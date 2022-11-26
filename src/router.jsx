import App from './App'
import Manage from './pages/Manage/Manage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

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
    }
  ]
}
