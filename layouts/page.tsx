import type { PropsWithChildren } from "react";
import { NextSeo } from "next-seo";
import { InterfaceContainer } from "components/base/container";
import { OpenGraph } from "next-seo/lib/types";
import { Navigation } from "components/common/navigation";

interface PageLayoutProps {
  title: string;
  description?: string;
  openGraph?: OpenGraph;
}

export default function PageLayout({
  children,
  title,
  description,
  openGraph,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <>
      <NextSeo title={title} description={description} openGraph={openGraph} />
      <Navigation />
      <InterfaceContainer as="main" py={2} px={8} mx="auto">
        {children}
      </InterfaceContainer>
    </>
  );
}
