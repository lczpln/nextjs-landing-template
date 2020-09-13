import { DefaultTheme, theme } from "@chakra-ui/core";

export const defaultPaddingY = 26;
export const defaultPaddingX = 26;
export const layoutSize = "1024px";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: "Montserrat, sans-serif",
    body: "Lato, sans-serif",

  }
}
export default customTheme;