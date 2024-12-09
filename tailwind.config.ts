import type { Config } from 'tailwindcss';

const colors = {
  primary: {
    50: '#e9fcf3',
    100: '#b9f6db',
    200: '#98f2c9',
    300: '#68ecb1',
    400: '#4be8a1',
    DEFAULT: '#1ee28a',
    600: '#1bce7e',
    700: '#15a062',
    800: '#117c4c',
    900: '#0d5f3a'
  },
  secondary: {
    50: '#f5f4ff',
    100: '#e0deff',
    200: '#d1cdff',
    300: '#bcb7ff',
    400: '#afa9ff',
    DEFAULT: '#9b93ff',
    600: '#8d86e8',
    700: '#6e68b5',
    800: '#55518c',
    900: '#413e6b'
  },
  background: {
    50: '#fffffe',
    100: '#fffefa',
    200: '#fffdf8',
    300: '#fffcf5',
    400: '#fffcf3',
    DEFAULT: '#fffbf0',
    600: '#e8e4da',
    700: '#b5b2aa',
    800: '#8c8a84',
    900: '#6b6965'
  },
  text: {
    light: '#ffffffde',
    dark: '#000000de'
  }
};

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: () => ({
      ...colors,
      'on-primary': colors.text.dark,
      'primary-container': colors.primary[200],
      'on-primary-container': colors.primary[900],
      'on-secondary': colors.text.dark,
      'secondary-container': colors.secondary[200],
      'on-secondary-container': colors.secondary[900],
      'on-background': colors.text.dark,
      'background-container': colors.background[100],
      'on-background-container': colors.background[900]
    })
  },

  plugins: []
} satisfies Config;

export default config;
