import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Layout = dynamic(
  () => import(/* webpackChunkName: "Layouts" */ "layouts/app"),
);

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
};

export default App;
