/** @type {import('tailwindcss').Config} */
export default {
  // dark: variants follow the .dark class on <html> (set by the inline script in
  // index.html from the saved choice or the device theme, and by ThemeToggle).
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral palette: values live in src/index.css as RGB channels
        // (light + dark mode) so opacity modifiers like bg-bg/75 work.
        bg: 'rgb(var(--bg) / <alpha-value>)',
        bg2: 'rgb(var(--bg2) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        mut: 'rgb(var(--mut) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        dk: 'rgb(var(--dk) / <alpha-value>)',
        // Technology = slate
        tech: {
          DEFAULT: '#4A5968',
          deep: '#1A232C',
          soft: '#E3E8ED',
          on: '#FFFFFF',
          ond: '#E3E8ED',
          light: '#BFC9D3',
        },
        // Administration = sage
        admin: {
          DEFAULT: '#9DB87A',
          deep: '#2A3A1A',
          soft: '#EEF3E4',
          on: '#1F2A12',
          ond: '#F1F5E8',
          mut: '#4F5E3A',
        },
        // Brand = lime (same in light and dark mode)
        brand: {
          DEFAULT: '#C5FF5C',
          hover: '#B3F03F',
          deep: '#8FCC1F',
          soft: '#EBFFC2',
          on: '#171717',
        },
      },
      boxShadow: {
        glow: '0 10px 30px -8px rgba(197,255,92,0.55)',
      },
      fontFamily: {
        display: ['"Familjen Grotesk"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        typeLine: {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0 0 0)' },
        },
        tick: {
          from: { opacity: '0', transform: 'scale(0.4)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 450ms ease-out backwards',
        marquee: 'marquee 30s linear infinite',
        'type-line': 'typeLine 450ms steps(24, end) forwards',
        tick: 'tick 350ms ease-out forwards',
      },
    },
  },
  plugins: [],
}