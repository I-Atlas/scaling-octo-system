import { YMaps } from "@pbe/react-yandex-maps";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Layout = dynamic(
  () => import(/* webpackChunkName: "Layouts" */ "layouts/app"),
);

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <YMaps>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </YMaps>
  );
};

export default App;
