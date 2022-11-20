import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const options = {
  components,
  directives,
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        dark: true,
        colors: {
          black: "#121214",
          white: "#E1E1E6",
          foreground: "#202024",
          background: "#121214",

          primary: "#23D962",
          secondary: "#36593E",
          accent: "#628C4F",
          error: "#b71c1c",
        },
      },
    },
  },
};

export const vuetify = createVuetify(options);

// /* Color Theme Swatches in Hex */
// const teste1 = "#1F2226";
// const teste2 = "#23D962";
// const teste3 = "#2D4034";
// const teste4 = "#36593E";
// const teste5 = "#628C4F";
