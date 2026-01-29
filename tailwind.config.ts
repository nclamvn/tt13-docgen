import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // ═══════════════════════════════════════════════════════════
        // TC DATA GREEN MONOCHROME PALETTE
        // ═══════════════════════════════════════════════════════════

        // PRIMARY: Green (Main brand color)
        primary: {
          50:  '#F0FDF4',  // Lightest - subtle backgrounds
          100: '#DCFCE7',  // Very light - hover backgrounds
          200: '#BBF7D0',  // Light - borders, dividers
          300: '#86EFAC',  // Medium light - icons inactive
          400: '#4ADE80',  // Medium - secondary elements
          500: '#22C55E',  // ★ MAIN - Primary buttons, links
          600: '#16A34A',  // ★ HOVER - Button hover, active
          700: '#15803D',  // Dark - Headers, sidebar
          800: '#166534',  // Darker - Footer, dark sections
          900: '#14532D',  // Darkest - Text on light bg
          950: '#052E16',  // Near black
          DEFAULT: '#22C55E',
          foreground: '#FFFFFF',
        },

        // NEUTRAL: Slate (Text, borders, backgrounds)
        slate: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },

        // SEMANTIC (All mapped to green shades)
        success: {
          DEFAULT: '#22C55E',
          light: '#DCFCE7',
        },
        warning: {
          DEFAULT: '#86EFAC',
          light: '#F0FDF4',
        },
        error: {
          DEFAULT: '#166534',
          light: '#DCFCE7',
        },
        info: {
          DEFAULT: '#16A34A',
          light: '#DCFCE7',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'green-sm': '0 1px 2px 0 rgba(22, 163, 74, 0.05)',
        'green-md': '0 4px 6px -1px rgba(22, 163, 74, 0.1), 0 2px 4px -2px rgba(22, 163, 74, 0.1)',
        'green-lg': '0 10px 15px -3px rgba(22, 163, 74, 0.1), 0 4px 6px -4px rgba(22, 163, 74, 0.1)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
