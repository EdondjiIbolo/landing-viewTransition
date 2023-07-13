/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: { 
			
			'md': {'min': '767px'},
			// => @media (max-width: 767px) { ... }
	  
			'sm': {'max': '439px'},
			// => @media (max-width: 639px) { ... }
		  }
	},
	plugins: [],  
	  
}
