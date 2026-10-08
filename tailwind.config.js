/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          dark: '#080C0F',
          darker: '#05080A',
          charcoal: '#0D1318',
          card: '#10171D',
          cardHover: '#141E26',
          teal: {
            900: '#061A1E',
            800: '#0A252C',
            700: '#0E333C',
            600: '#14434F',
            500: '#1B5665',
          },
          cyan: {
            DEFAULT: '#00E5FF',
            glow: '#00F2FE',
            dark: '#00B4D8',
            hover: '#33EBFF',
            dim: '#00E5FF20',
          },
          border: 'rgba(255, 255, 255, 0.08)',
          borderCyan: 'rgba(0, 229, 255, 0.25)',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
          muted: '#8B9DAA',
          subtext: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -3px rgba(0, 229, 255, 0.35)',
        'glow-cyan-sm': '0 0 15px -2px rgba(0, 229, 255, 0.25)',
        'glow-cyan-lg': '0 0 45px -5px rgba(0, 229, 255, 0.45)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyan-gradient': 'linear-gradient(135deg, #00E5FF 0%, #00B4D8 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(16, 23, 29, 0.95) 0%, rgba(10, 15, 20, 0.98) 100%)',
        'card-teal-gradient': 'linear-gradient(135deg, rgba(14, 35, 42, 0.9) 0%, rgba(10, 22, 28, 0.95) 100%)',
      }
    },
  },
  plugins: [],
}
