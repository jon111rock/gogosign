import App from './App';
import Manager from './pages/Manager';

export default {
	routes: [
		{
			path: '/',
			element: <App />,
		},
		{
			path: '/manager',
			element: <Manager />,
		},
	],
};
