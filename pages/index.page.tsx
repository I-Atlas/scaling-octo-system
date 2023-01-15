import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next/types";
import Link from "next/link";
import PageLayout from "layouts/page";
import { Hero } from "components/common/hero";
import { Heading, Text, Button } from "components/base";
import { Section } from "components/common/section";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import { offices } from "data/offices";
import IconPhoneCall from "components/icons/phone-call";
import { useRef } from "react";

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  return (
    <PageLayout
      title="Колесный Рай"
      description="Колесный Рай"
      // openGraph={{
      //   url: `${config.details.url}`,
      //   title: `${data?.publicCourse?.title}`,
      //   description: data?.publicCourse?.description,
      //   images: [
      //     {
      //       url:
      //         data?.publicCourse?.preview?.file?.url ??
      //         `${process.env.APP_URL}/api/og?title=${
      //           data?.publicCourse?.title
      //         }&description=${
      //           data?.publicCourse?.description
      //         }&backgroundColor=000&foregroundColor=fff&authorAvatar=${
      //           preview.avatar
      //         }&authorName=${preview.name}&tags=${tags.join(",")}`,
      //       width: 1200,
      //       height: 630,
      //       alt: data?.publicCourse?.title,
      //     },
      //   ],
      //   site_name: config.details.title,
      //   type: "publicCourse",
      //   locale: "ru_RU",
      // }}
    >
      <Section id="hero">
        <Hero
          title="Грузовые шины, диски и шиномонтаж"
          description="Профессиональный подбор колес, грузовой шиномонтаж, ремонт."
          buttonText="Обратный звонок"
          buttonClick={onOpen}
          image={"/taichi-nakamura-yx7_.jpg"}
        />
      </Section>
      {offices.map((office) => (
        <Section key={office.id} id={`office-${office.id}`}>
          <Flex
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: "32px" }}
            py={16}
          >
            <Flex
              gap={{ base: 6, md: "32px" }}
              p="12px"
              w={{ base: "100%", md: "50%" }}
              direction="column"
            >
              <Heading
                as="h2"
                fontSize={{ base: "28px", md: "32px" }}
                fontWeight="bold"
                size="display.sm"
                textAlign={{ base: "start", md: "left" }}
              >
                {office.title}
              </Heading>
              <Link href={`tel:${office.phoneRaw}`}>
                <Flex direction="row" alignItems="center">
                  <IconPhoneCall size={18} />
                  <Text
                    as="p"
                    pl="8px"
                    opacity={0.8}
                    fontSize={{ base: "18px", md: "20px" }}
                    textAlign={{ base: "start", md: "left" }}
                  >
                    {office.phone}
                  </Text>
                </Flex>
              </Link>

              <Text
                as="p"
                opacity={0.8}
                fontSize={{ base: "18px", md: "20px" }}
                textAlign={{ base: "start", md: "left" }}
              >
                {office.address}
              </Text>
            </Flex>
            <Map
              width="100%"
              height="300px"
              defaultState={{
                center: [55.75, 37.57],
                zoom: 9,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
              <Placemark
                modules={["geoObject.addon.balloon"]}
                defaultGeometry={[55.75, 37.57]}
                properties={{
                  balloonContentBody:
                    "This is balloon loaded by the Yandex.Maps API module system",
                }}
              />
            </Map>
          </Flex>
        </Section>
      ))}
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Обратный звонок</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Ваше имя</FormLabel>
              <Input ref={initialRef} placeholder="Ваше имя" />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Телефон</FormLabel>
              <Input type="tel" placeholder="Телефон" />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Сообщение</FormLabel>
              <Textarea placeholder="Сообщение" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button w="full" colorScheme="red">
              Отправить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </PageLayout>
  );
}
