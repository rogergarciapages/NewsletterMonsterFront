// tailwind.config.ts
import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        torch: {
          '50': '#fff0f3',
          '100': '#ffdde4',
          '200': '#ffc0ce',
          '300': '#ff94ab',
          '400': '#ff577b',
          '500': '#ff2353',
          '600': '#fa0036',
          '700': '#d7002e',
          '800': '#b10329',
          '900': '#920a27',
          '950': '#500011',
        },
        indigo: {
          '50': '#f1f8fa',
          '100': '#dbecf2',
          '200': '#bcd9e5',
          '300': '#8dbed3',
          '400': '#6ca6c1',
          '500': '#3c7e9e',
          '600': '#356785',
          '700': '#30566e',
          '800': '#2e485c',
          '900': '#2a3e4f',
          '950': '#182734',
        },
        daisy: {
          '50': '#fefde8',
          '100': '#fffdc2',
          '200': '#fff66d',
          '300': '#ffec45',
          '400': '#fcdb13',
          '500': '#ecc206',
          '600': '#cc9702',
          '700': '#a26b06',
          '800': '#86540d',
          '900': '#724511',
          '950': '#432405',
        },
        space: {
          '50': '#f4f7f7',
          '100': '#e3e9ea',
          '200': '#cbd5d6',
          '300': '#a7b7b9',
          '400': '#7b9295',
          '500': '#60767a',
          '600': '#526468',
          '700': '#475457',
          '800': '#3f484b',
          '900': '#383f41',
          '950': '#2c3336',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1' }], // Adjust as needed
        '6xl': ['4rem', { lineHeight: '1' }], // Adjust as needed
        '5xl': ['3.5rem', { lineHeight: '1' }], // Adjust as needed
        '4xl': ['3rem', { lineHeight: '1' }], // Adjust as needed
        '3xl': ['2.5rem', { lineHeight: '1.2' }], // Adjust as needed
        '2xl': ['2rem', { lineHeight: '1.3' }], // Adjust as needed
        'xl': ['1.75rem', { lineHeight: '1.4' }], // Adjust as needed
        'lg': ['1.5rem', { lineHeight: '1.5' }], // Adjust as needed
        'base': ['1rem', { lineHeight: '1.6' }], // Adjust as needed
        'sm': ['0.875rem', { lineHeight: '1.6' }], // Adjust as needed
        'xs': ['0.75rem', { lineHeight: '1.6' }], // Adjust as needed
        '2xs': ['0.625rem', { lineHeight: '1.6' }], // Adjust as needed
        '3xs': ['0.5rem', { lineHeight: '1.6' }], // Adjust as needed
        '4xs': ['0.375rem', { lineHeight: '1.6' }], // Adjust as needed
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Add Inter font here
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('daisyui'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

export default config;
