import {
  Box,
  Flex,
  Stack,
  useBreakpointValue,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { LinkButton, TrackedLink } from "components/base";
import NextLink from "next/link";
import { InterfaceContainer } from "components/base/container";

export const Navigation: React.FC = () => {
  return (
    <>
      <Box
        transition="all 100ms"
        position={"relative"}
        top={0}
        left={0}
        w="100%"
        zIndex="overlay"
        as="header"
      >
        <InterfaceContainer
          mx="auto"
          as={Flex}
          py={4}
          px={12}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <NextLink href="/" title={"Logo"}>
            <Image src="/logo.jpg" alt={"Logo"} cursor="pointer" w={32} />
          </NextLink>
        </InterfaceContainer>
      </Box>
    </>
  );
};
