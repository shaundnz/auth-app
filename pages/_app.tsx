import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../app/common/styles/theme";
import "@fontsource/noto-sans/400.css";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
