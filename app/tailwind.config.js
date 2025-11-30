/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,astro}"], // Scan all relevant files
  theme: {
    extend: {
      /* ---------------------------
         Colors (Material-style tokens)
      ---------------------------- */
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",

        secondary: "var(--color-secondary)",
        "secondary-hover": "var(--color-secondary-hover)",

        surface: "var(--surface)",
        "surface-dim": "var(--surface-dim)",
        "surface-bright": "var(--surface-bright)",

        "surface-lowest": "var(--surface-container-lowest)",
        "surface-low": "var(--surface-container-low)",
        "surface-container": "var(--surface-container)",
        "surface-high": "var(--surface-container-high)",
        "surface-highest": "var(--surface-container-highest)",

        outline: "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",

        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "on-primary": "var(--color-on-primary)",

        error: "var(--color-error)",
        "on-error": "var(--color-on-error)",
      },

      /* ---------------------------
         Font families
      ---------------------------- */
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },

      /* ---------------------------
         Spacing (Material-style)
         Using a minimal 4-value scale
      ---------------------------- */
      spacing: {
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        4: "1rem", // 16px
        6: "1.5rem", // 24px
        "8xl": "96rem",
        "9xl": "128rem",
      },

      /* ---------------------------
         Border radius
      ---------------------------- */
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
