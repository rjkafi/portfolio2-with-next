export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a6b1e1',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at bottom, #1e3a8a 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
