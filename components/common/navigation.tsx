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
import { Heading, Text } from "components/base";
import { InterfaceContainer } from "components/base/container";
import IconPhoneCall from "components/icons/phone-call";

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
          gap="16px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <NextLink href="/" title={"Logo"}>
            <Image src="/logo.png" alt={"Logo"} cursor="pointer" w={32} />
          </NextLink>

          <NextLink href="tel:+78123809380">
            <Flex
              direction="column"
              gap="8px"
              alignItems={{ base: "center", md: "flex-end" }}
            >
              <Flex direction="row" alignItems="center">
                <IconPhoneCall size={22} />
                <Heading
                  as="h2"
                  fontSize={{ base: "22px", md: "24px" }}
                  fontWeight="medium"
                  pl="8px"
                  textAlign={{ base: "start", md: "left" }}
                >
                  +7 (812) 380-9-380
                </Heading>
              </Flex>
              <Text
                as="p"
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="regular"
                pl="8px"
                textAlign={{ base: "start", md: "left" }}
              >
                СПБ, ПРОМЗОНА ШУШАРЫ, УЛ. ЛЕНИНА, Д. 8
              </Text>
            </Flex>
          </NextLink>
        </InterfaceContainer>
      </Box>
    </>
  );
};
