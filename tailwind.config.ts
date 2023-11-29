import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'tree-poppy': {
          '50': 'hsl(39, 100%, 96%)',
          '100': 'hsl(39, 96%, 89%)',
          '200': 'hsl(39, 95%, 77%)',
          '300': 'hsl(37, 96%, 65%)',
          '400': 'hsl(35, 95%, 54%)',
          '500': 'hsl(29, 91%, 50%)',
          '600': 'hsl(24, 93%, 44%)',
          '700': 'hsl(18, 89%, 37%)',
          '800': 'hsl(14, 81%, 31%)',
          '900': 'hsl(13, 76%, 26%)',
          '950': 'hsl(12, 89%, 14%)',
      }
    }
    },
  },
  plugins: [require("tailwindcss-animate")],
}