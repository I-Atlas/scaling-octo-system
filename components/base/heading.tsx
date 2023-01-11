import { convertFontSizeToCSSVar } from "./utils/typography";
import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";
import {
  HeadingBase,
  HeadingSizes,
  TypographySize,
  fontWeights,
  letterSpacings,
  lineHeights,
} from "styles/typography";
import { ComponentWithChildren } from "types/types";

export interface HeadingProps extends Omit<ChakraHeadingProps, "size"> {
  size?: HeadingSizes;
}

export const Heading: ComponentWithChildren<HeadingProps> = ({
  size = "title.lg",
  ...restProps
}) => {
  const [base] = size.split(".") as [HeadingBase, TypographySize];

  return (
    <ChakraHeading
      fontSize={convertFontSizeToCSSVar(size)}
      fontWeight={fontWeights[base]}
      lineHeight={lineHeights[base]}
      letterSpacing={letterSpacings[base]}
      {...restProps}
    />
  );
};
