import type { ReactNode, FC } from "react";

import type {
  StyleProps,
  HTMLChakraProps,
  ThemingProps,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/layout";
import { cx } from "@chakra-ui/utils";
import { chakra, omitThemingProps } from "@chakra-ui/react";

export interface InterfaceContainerProps
  extends HTMLChakraProps<"div">,
    ThemingProps<"InterfaceContainer"> {
  children: ReactNode;
  innerWidth?: StyleProps["width"];
  containerColor?: StyleProps["color"];
}

export const InterfaceContainer: FC<InterfaceContainerProps> = ({
  children,
  innerWidth = 1440,
  className,
  containerColor,
  ...props
}) => {
  const ownProps = omitThemingProps(props);

  return (
    <chakra.div
      backgroundColor={containerColor}
      className={cx("interface-container", className)}
    >
      <Container height="full" maxW={innerWidth} {...ownProps}>
        {children}
      </Container>
    </chakra.div>
  );
};
