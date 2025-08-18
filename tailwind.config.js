/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#97fce4",
        secondary: "rgba(151, 252, 228, 1)",
        charcoal: "#1a2f2e",
        light: "#ffffff",
        card: "#243a39",
        "accent-dark": "#0f1f1e",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #97fce4 0%, rgba(151, 252, 228, 0.7) 100%)",
        "gradient-charcoal":
          "linear-gradient(135deg, #1a2f2e 0%, #0f1f1e 100%)",
        "gradient-card": "linear-gradient(135deg, #243a39 0%, #1a2f2e 100%)",
      },
    },
  },
  plugins: [],
};
