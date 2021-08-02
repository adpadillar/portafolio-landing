import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // @ts-ignore
    dataLayer.push(arguments);
  }
  // @ts-ignore
  gtag("js", new Date());
  // @ts-ignore
  gtag("config", "G-KKJH19PBXZ");
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KKJH19PBXZ"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
