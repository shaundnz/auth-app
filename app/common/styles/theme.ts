import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
      app: {
        dark: "#333333",
        light: "#828282",
        link: "#319edb"
      }
  },
  styles: {
      global: {
          body: {
              color: "app.dark"
          }
      }
  },
  fonts: {
    heading: "Noto Sans",
    body: "Noto Sans",
  },
});

export default theme;