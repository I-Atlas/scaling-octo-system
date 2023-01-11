import { Icon } from "@chakra-ui/react";
import { ButtonProps, LinkButton, LinkButtonProps } from "components/base";

interface GeneralCtaProps extends Omit<LinkButtonProps, "href"> {
  title: string;
  href: string;
  size?: ButtonProps["size"];
}

export const HeroButton: React.FC<GeneralCtaProps> = ({
  title,
  href,
  ...props
}) => {
  return (
    <LinkButton
      px={"48px"}
      py={"24px"}
      fontSize={{ base: "16px", md: "18px" }}
      width="full"
      fontWeight="bold"
      textAlign="center"
      borderRadius="md"
      href={href}
      isExternal={href.startsWith("http")}
      _hover={{ opacity: 0.8 }}
      noIcon
      {...props}
    >
      {title}
    </LinkButton>
  );
};
