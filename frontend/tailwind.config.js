export default {
  content: [
    'index.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Archivo': ['Archivo', 'sans-serif'],
        // Continúa añadiendo tus fuentes personalizadas aquí
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        // Aquí puedes añadir o sobrescribir los pesos de fuente según necesites
      },
    },
  },
  plugins: [],
}