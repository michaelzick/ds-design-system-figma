/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "md:grid-cols-2",
    "md:grid-cols-3",
    "md:grid-cols-4",
    "md:grid-cols-5",
    "lg:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
    "lg:grid-cols-5",
    "lg:grid-cols-6",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "surface-card": "var(--surface-card)",
        "surface-elevated": "var(--surface-elevated)",
        "surface-popover": "var(--surface-popover)",
        primary: "var(--brand-primary)",
        "primary-foreground": "var(--button-primary-fg)",
        secondary: "var(--sand)",
        "secondary-foreground": "var(--button-secondary-fg)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [],
};
