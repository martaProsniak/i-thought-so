import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

theme.styles.global = {
  html: {
    color: "gray.100",
    backgroundColor: "gray.800",
  },
};

export default theme;
