const defaultTheme = require("tailwindcss/defaultTheme");
const twColors = require("tailwindcss/colors");

const screens = {
  ...defaultTheme.screens,
};

// Colours resolve to the design-system custom properties declared in
// resources/css/tailwind.css (light on :root, dark on .dark), so `bg-paper`,
// `text-ink`, `bg-red` etc. follow the theme without `dark:` variants.
const token = (name) => `var(--${name})`;

module.exports = {
  darkMode: "class",
  content:
    process.env.NODE_ENV == "production"
      ? ["./release/js/main.*.js", "./src/**/*.cljs", "./src/**/*.cljc"]
      : ["./src/**/*.cljs", "./src/**/*.cljc"],
  theme: {
    extend: {
      fontFamily: {
        // Display — Jost (Google Fonts). Headings, numerals, nav.
        display: ["Jost", "Futura", "Century Gothic", ...defaultTheme.fontFamily.sans],
        // Body — Newsreader (Google Fonts). Reading text, Journal.
        body: ["Newsreader", "Georgia", "Times New Roman", "serif"],
        // Data — IBM Plex Mono (Google Fonts). Labels, captions, numbers.
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        "fira-code": ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        ...Object.fromEntries(
          [
            "paper", "paper-raised", "paper-sunk", "ink", "ink-muted", "rule", "rule-strong",
            "on-red", "red-text", "on-blue", "blue-text", "on-yellow", "turquoise", "on-turquoise",
            "on-pink", "lilac", "brick", "focus", "night", "on-night", "on-media",
          ].map((n) => [n, token(n)])
        ),
        // Pigments keep Tailwind's numbered shades (still used by older pages)
        // and add the design-system value as the bare class: `bg-red`, `text-blue`.
        red: { ...twColors.red, DEFAULT: token("red") },
        blue: { ...twColors.blue, DEFAULT: token("blue") },
        yellow: { ...twColors.yellow, DEFAULT: token("yellow") },
        // Older pages used numbered pinks as their accent; they now resolve to
        // the red shades so that accent reads as the design system's red.
        pink: { ...twColors.red, DEFAULT: token("pink") },
      },
      maxWidth: { content: "1440px", measure: "68ch" },
    },
    screens,
  },
  plugins: [require("@tailwindcss/forms")],
};

// Export the screens object so you can import it in your React components
module.exports.screens = screens;
