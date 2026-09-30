import type { Config } from "tailwindcss";
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { board: c("board"), paper: c("paper"), ink: c("ink"), signal: c("signal"), gold: c("gold"), mute: c("mute"), onsignal: c("onsignal") },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "ui-monospace", "monospace"] },
    },
  },
  plugins: [],
};
export default config;
