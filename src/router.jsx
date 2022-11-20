import App from './App';
import Manage from './pages/Manage';

export default {
	routes: [
		{
			path: '/',
			element: <App />,
		},
		{
			path: '/manage',
			element: <Manage />,
		},
	],
};
