import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/optimized/images/apple-touch-icon.webp"
        />
        <link
          href="/optimized/images/favicon-16x16.webp"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/optimized/images/favicon-32x32.webp"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link href="/favicon.ico" rel="shortcut icon" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
