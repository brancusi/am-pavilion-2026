const defaultTheme = require("tailwindcss/defaultTheme");

const screens = {
  ...defaultTheme.screens,
};

module.exports = {
  darkMode: "class",
  content:
    process.env.NODE_ENV == "production"
      ? ["./release/js/main.*.js", "./src/**/*.cljs", "./src/**/*.cljc"]
      : ["./src/**/*.cljs", "./src/**/*.cljc"],
  theme: {
    extend: {
      fontFamily: {
        // Display — Neue Haas Grotesk Display (Typekit). Headings, titles, nav, prose body.
        display: [
          "neue-haas-grotesk-display",
          "neue-haas-grotesk-text",
          "sans-serif",
        ],
        // Legacy alias — kept so old `font-futura` refs still resolve
        futura: [
          "neue-haas-grotesk-display",
          "neue-haas-grotesk-text",
          "sans-serif",
        ],

        // Data — FiraCode (local variable font). Labels, numbers, code, eyebrows.
        "fira-code": ["FiraCode", "monospace"],

        // Override Tailwind's default mono to use FiraCode everywhere
        mono: ["FiraCode", "monospace"],

        // Keep Inter as sans fallback (unused in design system, but safe default)
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    screens,
  },
  plugins: [require("@tailwindcss/forms")],
};

// Export the screens object so you can import it in your React components
module.exports.screens = screens;
