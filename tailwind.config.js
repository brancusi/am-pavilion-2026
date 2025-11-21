const defaultTheme = require("tailwindcss/defaultTheme");

const screens = {
  ...defaultTheme.screens,
};

module.exports = {
  content:
    process.env.NODE_ENV == "production"
      ? ["./release/js/app.js"]
      : ["./public/js/cljs-runtime/*.js"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["futura-100", "sans-serif"],

        // For Book (400)
        "futura-book": ["futura-100-book", "sans-serif"],

        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        "fira-code": ["FiraCode", "monospace"],
      },
    },
    screens,
  },
  plugins: [require("@tailwindcss/forms")],
};

// Export the screens object so you can import it in your React components
module.exports.screens = screens;
