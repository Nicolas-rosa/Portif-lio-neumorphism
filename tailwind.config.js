/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cyber': 'url("https://img.freepik.com/fotos-gratis/textura-de-fundo-de-tecnologia_23-2148105496.jpg?t=st=1730668383~exp=1730671983~hmac=cfa81db88f2862117c6fdbf3f158b264e30d07dbf29bf41d78699ae05a83fe79&w=996")',
      },
      colors: {
        'primary': '#e9e9e9',
      },
      borderRadius: {
        custom: '73% 27% 84% 16% / 78% 17% 83% 22%',
      },
    },
  },
  plugins: [],
};