import { fontWeights, letterSpacings, lineHeights } from "./typography";
import {
  Theme,
  extendTheme,
  ThemeOverride,
  StyleFunctionProps,
} from "@chakra-ui/react";
import { getColor, mode } from "@chakra-ui/theme-tools";
import { mergeWith } from "@chakra-ui/utils";

const chakraTheme: Theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  } as Theme["config"],
  fonts: {
    heading: `"Inter", -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
    body: `"Inter", -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
    mono: `'IBM Plex Mono', monospace`,
  },
  styles: {
    global: <T extends StyleFunctionProps>(props: T) => ({
      "html, body": {
        padding: 0,
        margin: 0,
        fontFeatureSettings: `'zero' 1`,
        scrollBehavior: "smooth",
        "-webkit-tap-highlight-color": "transparent",
        color: mode("#000000", "#C1C2C5")(props),
      },
      "::selection": {
        backgroundColor: "#90cdf4",
        color: "#fefefe",
      },
      "::-moz-selection": {
        backgroundColor: "#90cdf4",
        color: "#fefefe",
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        color: "heading",
      },
    },
    Text: {
      baseStyle: {
        color: "paragraph",
      },
    },
  },
}) as Theme;

export function makeTheme(overrides: ThemeOverride = {}) {
  const theme = extendTheme({
    ...chakraTheme,
    fontSizes: [],
    fontWeights,
    lineHeights,
    letterSpacings,
  });
  return mergeWith(theme, overrides);
}

export const theme = makeTheme();

export { chakraTheme };
