import App from './App'
import Manage from './pages/Manage/Manage'

export default {
  routes: [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/manage',
      element: <Manage />
    }
  ]
}
