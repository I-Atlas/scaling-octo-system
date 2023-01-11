import { AspectRatio, Box, BoxProps, Container } from "@chakra-ui/react";
import { InterfaceContainer } from "components/base/container";
import { ComponentWithChildren } from "types/types";

interface IHomepageSection extends BoxProps {
  bottomGradient?: true;
  topGradient?: true;
  middleGradient?: true;
  id?: string;
}
export const Section: ComponentWithChildren<IHomepageSection> = ({
  children,
  bottomGradient,
  topGradient,
  middleGradient,
  id,
  ...restBoxProps
}) => {
  return (
    <InterfaceContainer
      mx="auto"
      position="relative"
      as="section"
      overflow="visible"
      zIndex={2}
      p={0}
      m={0}
      {...restBoxProps}
    >
      {topGradient && (
        <AspectRatio
          w="100%"
          maxW="container.lg"
          ratio={{ base: 1 / 2, md: 1 }}
          position="absolute"
          top={0}
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={-1}
          overflow="visible"
        >
          <Box
            background="linear-gradient(268.16deg, rgba(45, 142, 255, 0.4) 8.06%, rgba(194, 0, 198, 0.4) 73.26%)"
            filter={{
              base: "blur(100px)",
              md: "blur(360px)",
            }}
            borderRadius="50%"
            overflow="visible"
          >
            <Box
              position="absolute"
              backdropFilter="blur(0px)"
              top={0}
              left={0}
              bottom={0}
              right={0}
              opacity={0.5}
              background="linear-gradient(268.16deg, rgba(45, 142, 255, 0.4) 8.06%, rgba(194, 0, 198, 0.4) 73.26%)"
            />
          </Box>
        </AspectRatio>
      )}

      {middleGradient && (
        <AspectRatio
          w="100%"
          maxW="container.lg"
          ratio={{ base: 1 / 2, md: 1 }}
          position="absolute"
          top={0}
          left="50%"
          transform="translate(-50%, 5%)"
          zIndex={-1}
          overflow="visible"
        >
          <Box
            background="linear-gradient(268.16deg, rgba(45, 142, 255, 0.4) 8.06%, rgba(194, 0, 198, 0.4) 73.26%)"
            filter={{
              base: "blur(100px)",
              md: "blur(360px)",
            }}
            borderRadius="50%"
            overflow="visible"
          >
            <Box
              position="absolute"
              backdropFilter="blur(0px)"
              top={0}
              left={0}
              bottom={0}
              right={0}
              opacity={0.5}
              background="linear-gradient(268.16deg, rgba(45, 142, 255, 0.4) 8.06%, rgba(194, 0, 198, 0.4) 73.26%)"
            />
          </Box>
        </AspectRatio>
      )}

      {bottomGradient && (
        <AspectRatio
          w="100%"
          maxW="container.lg"
          ratio={{ base: 1 / 2, md: 1 }}
          position="absolute"
          bottom="5%"
          left="50%"
          transform="translate(-50%, 50%)"
          zIndex={-1}
          overflow="visible"
        >
          <Box
            background="linear-gradient(268.16deg, rgba(45, 142, 255, 0.4) 8.06%, rgba(194, 0, 198, 0.4) 73.26%)"
            filter={{
              base: "blur(100px)",
              md: "blur(360px)",
            }}
            borderRadius="50%"
            overflow="visible"
          >
            <Box
              position="absolute"
              backdropFilter="blur(0px)"
              top={0}
              left={0}
              bottom={0}
              right={0}
              opacity={0.5}
              background="linear-gradient(268.16deg, rgba(45, 142, 255, 0.4) 8.06%, rgba(194, 0, 198, 0.4) 73.26%)"
            />
          </Box>
        </AspectRatio>
      )}

      <InterfaceContainer
        p={0}
        m={0}
        zIndex={1}
        position="relative"
        w="100%"
        id={id}
      >
        {children}
      </InterfaceContainer>
    </InterfaceContainer>
  );
};
