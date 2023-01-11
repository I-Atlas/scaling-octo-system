import { FC, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import { createStandaloneToast } from "@chakra-ui/toast";

const { ToastContainer } = createStandaloneToast();

interface IProps {
  children?: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
      <ToastContainer />
    </ChakraProvider>
  );
};

export default Layout;
