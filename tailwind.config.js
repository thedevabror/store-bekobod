/** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },

      colors: {
        background: "#F9F9F9",
        onBackground: "#000000",
        surface: "#FFFFFF",
        onSurface: "#414141",
        primary: "#FF6633",
        onPrimary: "#FFFFFF",
        secondary: "#70C05B",
        onSecondary: "#FFFFFF",
        lightest: "#F3F2F1",
        light: "#BFBFBF",
        hard: "#8F8F8F",
        hardest: "#606060",
        success: "#008C49",
        info: "#1CB9FC",
        warning: "#FCA21C",
        error: "#D80000",
        bgpage: "#FBF8EC",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        s: ["0.875rem", { lineHeight: "1.25rem" }],
        m: ["1rem", { lineHeight: "1.5rem" }],
        l: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
      },
      screens: {
        sm: "360px",
        md: "769px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme("fontSize.xl[0]"),
            },
            h2: {
              fontSize: theme("fontSize.l[0]"),
            },
            h3: {
              fontSize: theme("fontSize.m[0]"),
            },
          },
        },
        sm: {
          css: {
            h1: {
              fontSize: theme("fontSize.l[0]"),
            },
            h2: {
              fontSize: theme("fontSize.m[0]"),
            },
            h3: {
              fontSize: theme("fontSize.s[0]"),
            },
          },
        },
      }),
    },
  },

  plugins: [],
};
