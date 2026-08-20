import type { Config } from "tailwindcss";
import { tailwindTheme } from "./src/styles/tokens";

export default {
  theme: {
    extend: tailwindTheme,
  },
} satisfies Config;
