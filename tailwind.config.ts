import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "2rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
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
        // REVLIXI brand color scale — primary teal (#14B8C4)
        brand: {
          50:  "#ecfdfe",
          100: "#d1f7f9",
          200: "#a5eef1",
          300: "#66e0e7",
          400: "#28c7d3",
          500: "#14b8c4",
          600: "#0d96a0",
          700: "#0e7880",
          800: "#106268",
          900: "#125158",
          950: "#073540",
        },
        // REVLIXI navy — dark background color (#1A2233)
        navy: {
          50:  "#f0f2f7",
          100: "#dde2ed",
          200: "#bcc5d9",
          300: "#919fbf",
          400: "#6679a0",
          500: "#4d5f83",
          600: "#3c4d6b",
          700: "#2e3c54",
          800: "#232e42",
          900: "#1a2233",
          950: "#0f1520",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.07", letterSpacing: "-0.025em" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.018em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card-sm": "0 1px 2px 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)",
        card: "0 1px 3px 0 rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)",
        "card-md": "0 4px 16px 0 rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
        "card-lg": "0 8px 32px 0 rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)",
        "card-xl": "0 16px 48px 0 rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
        "glow-brand": "0 0 0 3px rgba(20,184,196,0.30)",
        "glow-sm": "0 0 20px 0 rgba(0,0,0,0.06)",
        // Focus / interaction states
        "focus-brand": "0 0 0 3px rgba(20,184,196,0.35)",
        "inset-brand": "inset 0 0 0 1px rgba(20,184,196,0.25)",
      },
      // Brand easing curves (mirrors motion/tokens.ts for use in CSS transitions)
      transitionTimingFunction: {
        "brand-out":   "cubic-bezier(0.21, 0.47, 0.32, 0.98)",
        "brand-in":    "cubic-bezier(0.55, 0.00, 0.85, 0.06)",
        "brand-inout": "cubic-bezier(0.76, 0.00, 0.24, 1.00)",
      },
      // Named duration scale (mirrors design-tokens.ts for IDE discoverability)
      transitionDuration: {
        fast:  "200ms",
        base:  "350ms",
        slow:  "550ms",
        xslow: "800ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand":
          "linear-gradient(135deg, #0d96a0 0%, #14b8c4 50%, #28c7d3 100%)",
        "gradient-dark": "linear-gradient(135deg, #0f1520 0%, #1a2233 100%)",
        "dot-grid":
          "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "20px 20px",
        "dot-md": "32px 32px",
        "dot-lg": "48px 48px",
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
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "hero-fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "hero-fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 1.5s ease-out infinite",
        "hero-fade-up": "hero-fade-up 0.65s cubic-bezier(0.21,0.47,0.32,0.98) both",
        "hero-fade-in": "hero-fade-in 0.65s cubic-bezier(0.21,0.47,0.32,0.98) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
