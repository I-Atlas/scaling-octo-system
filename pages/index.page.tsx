import { useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next/types";
import PageLayout from "layouts/page";
import { Hero } from "components/common/hero";
import { Heading } from "components/base";
import { Section } from "components/common/section";

export default function Index() {
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
          buttonLink={"/"}
          image={"/taichi-nakamura-yx7_.jpg"}
        />
      </Section>
    </PageLayout>
  );
}
