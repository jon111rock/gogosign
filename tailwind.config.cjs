/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				'yellow-100': '#FDF5DD',
				'yellow-200': '#FECD6D',
				'yellow-300': '#F9B867',
				'yellow-400': '#EFBB74',
				'yellow-500': '#EDBA56',
				'yellow-600': '#E09941',
				'yellow-700': '#DCA354',
				'gray-100': '#F2F2F2',
				'gray-200': '#DDDDDD',
				'gray-300': '#CCCCCC',
				'gray-400': '#A6A6A6',
				'gray-500': '#757575',
				'gray-600': '#757267',
				'gray-700': '#6C757D',
				'gray-800': '#54595E',
				'black-500': '#231B00'
			}
		},
		colors: {}
	},
	plugins: []
}
