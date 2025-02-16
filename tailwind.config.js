/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif'],
      },
      colors: {
        primary: '#FFCC00', // goldAccent
        ivoryTint: '#FBF6EC', // text colors for para
        darkBg: '#000', // Background for dark sections
      },
      boxShadow: {
        'nav-shadow': '0px 8.867px 9.458px 0px rgba(0, 0, 0, 0.10), 0px 0.637px 3.821px 0px rgba(255, 255, 255, 0.25) inset',
        'card-inset': '0px 0px 0px 10px rgba(255, 255, 255, 0.03) inset',
        'icon-border': '0px 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(255, 255, 255, 0.10), 0px 0.5px 0px 0px #FC0 inset',
      },
      backgroundImage: {
        'card-gradient': "linear-gradient(180deg, rgba(255, 204, 0, 0.00) 0%, rgba(255, 204, 0, 0.08) 100%)",
        'card-radial': "radial-gradient(64.95% 117.28% at 71.88% 76.72%, rgba(255, 210, 33, 0.20) 0%, rgba(255, 210, 33, 0.00) 100%)",
        'card-line': "linear-gradient(90deg, rgba(255, 204, 0, 0.00) 0%, rgba(255, 204, 0, 0.60) 50%, rgba(255, 204, 0, 0.00) 100%)",
        'review-card': "linear-gradient(180deg, rgba(255, 204, 0, 0.00) 0%, rgba(255, 204, 0, 0.10) 100%)",
      },
    },
  },
  plugins: [],
};
