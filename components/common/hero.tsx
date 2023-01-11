import { ReactNode } from "react";
import { HeroButton } from "./hero-button";
import {
  AspectRatio,
  Center,
  Container,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { Heading } from "components/base";
import { ChakraNextImage } from "components/base/chakra-next-image";
import { StaticImageData } from "next/image";
import { ComponentWithChildren } from "types/types";
import { InterfaceContainer } from "components/base/container";

export interface IHero {
  title: ReactNode;
  description: ReactNode;
  buttonText: string;
  buttonLink: string;
  image?: StaticImageData | string;
}

export const Hero: ComponentWithChildren<IHero> = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  children,
}) => {
  return (
    <InterfaceContainer flexDirection="column" py={4} px={0} m={0}>
      <SimpleGrid
        borderRadius={{ base: 12, md: 24 }}
        columns={{ base: 1, md: 7 }}
        minHeight="578px"
      >
        <Flex
          gridColumnEnd={{ base: undefined, md: image ? "span 4" : "span 7" }}
          padding={{ base: "0px", md: "12px" }}
          pt={{ base: "36px", md: undefined }}
          borderTopLeftRadius={{ base: 12, md: 24 }}
          borderTopRightRadius={{ base: 12, md: 0 }}
          borderBottomLeftRadius={{ base: 0, md: 24 }}
          flexDir="column"
          gap={{ base: 6, md: "32px" }}
          align={{ base: "center", md: "start" }}
          justify="center"
        >
          <Heading
            as="h2"
            fontSize={{ base: "32px", md: "48px" }}
            fontWeight="bold"
            size="display.sm"
            textAlign={{ base: "start", md: "left" }}
          >
            {title}
          </Heading>
          <Heading
            as="h3"
            size="subtitle.md"
            opacity={0.8}
            textAlign={{ base: "start", md: "left" }}
          >
            {description}
          </Heading>
          <HeroButton
            mt="24px"
            title={buttonText}
            href={buttonLink}
            color="white"
            bg="red"
          />
        </Flex>
        {image && (
          <Center
            padding={{ base: "0px", md: "12px" }}
            gridColumnEnd={{ base: undefined, md: "span 3" }}
            pt={{ base: "36px", md: undefined }}
          >
            <Flex justifyContent={{ base: "center", md: "flex-end" }} w="100%">
              <AspectRatio ratio={1} w="100%">
                <ChakraNextImage
                  alt="Hero"
                  src={image}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </AspectRatio>
            </Flex>
          </Center>
        )}
      </SimpleGrid>

      <Container mt="64px" padding={{ base: "24px", md: 0 }}>
        {children}
      </Container>
    </InterfaceContainer>
  );
};
