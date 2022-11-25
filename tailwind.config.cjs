/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'yellow-100': '#FDF5DD',
				'yellow-200': '#FECD6D',
				'yellow-300': '#F9B867',
				'yellow-400': '#EFBB74',
				'yellow-500': '#EDBA56',
				'yellow-600': '#E09941',
				'yellow-700': '#DCA354',
				'grey-100': '#F2F2F2',
				'grey-200': '#DDDDDD',
				'grey-300': '#CCCCCC',
				'grey-400': '#A6A6A6',
				'grey-500': '#757575',
				'grey-600': '#757267',
				'grey-600': '#6C757D',
				'grey-800': '#54595E',
				'black-500': '#231B00'
			},
		},
		colors: {},
	},
	plugins: [],
};
